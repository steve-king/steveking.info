var React = require('react');
var Post = require('./Post');
var Panel = require('./Panel');
var wordpress_api = require('../utils/wordpress-api');

var PostContainer = React.createClass({
    getInitialState: function(){
        return ({
            isLoading: true
        })
    },
    componentDidMount: function(){
        var postType = this.props.route.postType;
        var postSlug = this.props.routeParams.slug || this.props.route.postSlug;
        this.loadContent(postType, postSlug);
    },
    componentWillReceiveProps: function(nextProps){
        var postType = nextProps.route.postType;
        var postSlug = nextProps.routeParams.slug || nextProps.route.postSlug;
        this.loadContent(postType, postSlug);
    },
    loadContent: function(type, slug){
        wordpress_api
            .getPost(type, slug)
            .then(function(data){
                this.setState({
                    isLoading: false,
                    title: data.title.rendered,
                    content: data.content.rendered,
                    slug: data.slug,
                    gallery: data.acf.gallery,
                    ctas: data.acf.ctas
                })
            }.bind(this));
    },
	render: function(){
		return (
            <div key={this.props.routeParams.slug || this.props.route.postSlug}>
                <Panel canClose={this.props.route.panelCanClose} parentPath={this.props.route.parentPath}>
                    <Post
                        isLoading={this.state.isLoading}
                        title={this.state.title}
                        content={this.state.content}
                        gallery={this.state.gallery}
                        galleryLink={this.props.route.parentPath+'/'+this.props.routeParams.slug+'/gallery'}
                     />
                </Panel>
                {this.props.children}
            </div>
		);
	}
});

module.exports = PostContainer;

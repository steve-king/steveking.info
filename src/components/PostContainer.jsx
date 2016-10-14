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
        this._isMounted = true;
        this.postSlug = this.props.routeParams.slug || this.props.route.postSlug;
        this.loadContent(this.postSlug);
    },
    componentWillUnmount: function(){
        this._isMounted = false;
    },
    componentWillReceiveProps: function(nextProps){

        var nextPostSlug = nextProps.routeParams.slug;

        if( this._isMounted && nextPostSlug !== this.postSlug){

            this.setState({
                isLoading: true
            });

            this.postSlug = nextPostSlug;
            this.loadContent(this.postSlug);
        }
    },
    loadContent: function(slug){
        wordpress_api
            .getPost(this.props.route.postType, slug)
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
                        ctas={this.state.ctas}
                        galleryLink={this.state.gallery && '/'+this.props.route.parentPath+'/'+this.props.routeParams.slug+'/gallery'}
                     />
                </Panel>
                {this.state.gallery && this.props.children && React.cloneElement(this.props.children, {
                    gallery: this.state.gallery
                })}
            </div>
		);
	}
});

module.exports = PostContainer;

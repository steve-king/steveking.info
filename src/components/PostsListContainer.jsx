var React = require('react');
var ReactRouter = require('react-router');
var Panel = require('./Panel');
var PostsList = require('./PostsList');
var wordpress_api = require('../utils/wordpress-api');

var ListContainer = React.createClass({
	getInitialState: function(){
        return ({
            isLoading: true
        })
    },
	componentDidMount: function(){
		var postType = this.props.route.postType;
        wordpress_api
            .getPosts(postType)
            .then(function(posts){
                this.setState({
                    isLoading: false,
                    posts: posts
                })
            }.bind(this));
	},
	render: function(){
		return (
			<div className='panel__wrapper'>
				<Panel
					size='small'
					title='Projects'
					isLoading={this.state.isLoading}>
					<PostsList posts={this.state.posts} activePost={this.props.params.slug} />
				</Panel>
				{this.props.children}
   			</div>
		);
	}
});

module.exports = ListContainer;

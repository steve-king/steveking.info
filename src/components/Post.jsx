var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Post = function(props){

	if( props.isLoading ){
		return (
			<div>Loading...</div>
		)
	} else {

		return (
			<div>
				<h1>{props.title}</h1>
				{props.content}
				{props.gallery &&
					<Link to={props.galleryLink}>Gallery</Link>
				}
			</div>
		)
	}
}

module.exports = Post;

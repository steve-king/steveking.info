var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PostsList = function(props){

	if( props.isLoading ){
		return (
			<div>Loading...</div>
		)
	} else {
		return (
			<div>
				<h1>{props.header}</h1>
				<ul>
					{props.posts && props.posts.map(function(item, i){
	            		return (
							<li key={i}>
								<Link to={'/projects/'+item.slug}>{item.title.rendered}</Link>
							</li>
						)
	          		})}
				</ul>
			</div>
		)
	}
};

module.exports = PostsList;

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PostsList = function(props){

	return (
		<ul className='linkList'>
			{props.posts && props.posts.map(function(item, i){
        		return (
					<li key={i}>
						<Link to={'/projects/'+item.slug} className={props.activePost == item.slug ? 'active' : ''}>
							{item.title.rendered}
							<span className='icon icon--chevronRight'></span>
						</Link>
					</li>
				)
      		})}
		</ul>
	)
};

module.exports = PostsList;

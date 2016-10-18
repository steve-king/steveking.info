var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var getMarkup = function(markupString){
	return { __html: markupString }
}

var Post = function(props){

	return (
		<div>
			<div dangerouslySetInnerHTML={getMarkup(props.content)} />
			<ul className='linkList'>
				{props.galleryLink &&
					<li><Link to={props.galleryLink}>Gallery <span className='icon icon--chevronRight'></span></Link></li>
				}
				{props.ctas && props.ctas.map(function(cta, i){
					return (
						<li key={i}><a href={cta.url} target='blank'>{cta.label} <span className={'icon icon--'+cta.icon}></span></a></li>
					)
				})}
			</ul>
		</div>
	)
}

module.exports = Post;

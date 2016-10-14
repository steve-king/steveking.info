var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var getMarkup = function(markupString){
	return { __html: markupString }
}

var Post = function(props){

	if( props.isLoading ){
		return (
			<div>Loading...</div>
		)
	} else {

		return (
			<div>
				<h1>{props.title}</h1>
				<div dangerouslySetInnerHTML={getMarkup(props.content)} />
				<ul>
					{props.galleryLink &&
						<li><Link to={props.galleryLink} className="btn">Gallery</Link></li>
					}
					{props.ctas && props.ctas.map(function(cta, i){
						return (
							<li key={i}><a href={cta.url} target="blank" className={'btn icon icon-'+cta.icon}>{cta.label}</a></li>
						)
					})}
				</ul>
			</div>
		)
	}
}

module.exports = Post;

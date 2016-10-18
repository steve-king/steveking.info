var React = require('react');
var Panel = require('./Panel');

var Gallery = function(props){

	var parentPath = props.location.pathname.replace('/'+props.route.path, '');

	return (
		<Panel
			size='full'
			title='Gallery'
			canClose={props.route.panelCanClose}
			parentPath={parentPath}>

			{props.gallery.map(function(item, i){
				return (
					<p key={i}><img src={item.image.url} alt={item.image.alt} key={i} /></p>
				)
			})}

		</Panel>
	);
}

module.exports = Gallery;

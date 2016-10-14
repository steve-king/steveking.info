var React = require('react');
var Panel = require('./Panel');

var Gallery = function(props){

	// if( props.isLoading ){
	// 	return (
	// 		<div>Loading...</div>
	// 	);
	// }

	var parentPath = props.location.pathname.replace('/'+props.route.path, '');

	return (
		<Panel canClose={props.route.panelCanClose} parentPath={parentPath}>
            <h1>Gallery</h1>
			{props.gallery.map(function(item, i){
				return (
					<img src={item.image.url} alt={item.image.alt} key={i} />
				)
			})}
		</Panel>
	);
}

module.exports = Gallery;

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
			<img src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg" />
		</Panel>
	);
}

module.exports = Gallery;

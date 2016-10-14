// Import core CSS
require("./assets/scss/style.scss");

var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
	routes,
	document.getElementById('app')
);

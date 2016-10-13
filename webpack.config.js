var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: './www',
		filename: '/assets/js/index.js'
	},
	module: {
		loaders: [
			{test: [/\.js$/, /\.jsx$/], exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')},
            {test: [/\.svg$/, ], loader: 'url-loader'},
            {test: [/\.ttf$/, /\.woff$/, /\.eot$/], loader: 'file-loader', query: {name: '/assets/fonts/[name].[ext]'}}
		]
	},
	plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('assets/css/style.css', {
            allChunks: true
        })
    ],
	devtool: 'source-map',
	devServer: {
		stats: 'errors-only',
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};

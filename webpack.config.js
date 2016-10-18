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
			{test: [/\.png/,/\.jpg/,/\.gif/ ], loader: 'file-loader', query: {name: '/assets/img/[name].[ext]'}},
            {test: [/\.woff$/, /\.woff2$/, /\.ttf$/, /\.eot$/], loader: 'file-loader', query: {name: '/assets/fonts/[name].[ext]'}},
			{test: [/\.htaccess/], loader: 'file-loader', query: {name: '.htaccess'}}
		]
	},
	plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('/assets/css/style.css', {
            allChunks: true
        })
    ],
	devtool: 'source-map',
	devServer: {
		stats: 'errors-only',
		historyApiFallback: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};

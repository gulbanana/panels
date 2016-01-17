var webpack = require("webpack");

module.exports = {
	entry: './index.ts',
	output: {
		filename: 'app.js',
		path: 'assets',
		publicPath: '/assets/'
	},
	module: {
		loaders: [{
			test: /\.tsx?$/,
			loader: 'ts-loader'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.tsx', '.ts']
	},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}

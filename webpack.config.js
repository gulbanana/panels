var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/index",

    output: {
        filename: "app.js",
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/"
    },

    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: "ts" },
            { test: /\.css/, loader: 'style!css?modules' },
        ]
    }
};

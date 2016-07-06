var path = require("path");

module.exports = {
    context: path.resolve('client-src'),
    entry: [
        './js/index'
    ],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'public',
        historyApiFallback: true,
        proxy: {
            '/api/*': 'http://localhost:8070/'
        }
    },

    module: {
        loaders: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
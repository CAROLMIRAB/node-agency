module.exports = {
    entry: './app/index.js', 
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
           
          }
        }
      ]
    }
}

/*const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
    ],
},
plugins: [
    new webpack.NamedModulesPlugin(),
]
};*/
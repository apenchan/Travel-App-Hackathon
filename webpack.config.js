const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/client/src/App.js'),

    output: {
        path: path.join(__dirname, '/client/dist/js'),
        filename: 'app.js'
    },
    // module: {
    //     rules: [{
    //         test: /\.css$/,
    //         use: [
    //             'to-string-loader',
    //             'css-loader'
    //         ]
    //     }]
    // },
    module: {
        loaders: [{
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true,
                },
              },
            ],
          },{
            test: /\.js?$/,
            include: path.join(__dirname, '/client/src'),
            loader: 'babel-loader',
            query: {
                presets: ["react", "es2015"]
            },

        },]},
 
    devtool: "source-map",
    watch: true
};


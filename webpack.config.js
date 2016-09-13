module.exports = {

    entry: './bband/bband/static/js/main.js',
    output: {
        path: './bband/bband/static/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: __dirname + '/bband/bband/static/js',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html/,
                loader: 'file',
                include: __dirname + '/src',
            }
        ]
    }

};

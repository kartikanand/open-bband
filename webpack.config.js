module.exports = {

    entry: './src/scripts/main.js',
    output: {
        path: 'www',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: __dirname + '/src/scripts',
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

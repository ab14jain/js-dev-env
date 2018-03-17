const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/default.ts'),
    devtool: 'inline-source-map',
    module: {
        loader:[{
            test: /\.ts$/,
            include:path.resolve(__dirname, 'src'),
            loader: 'ts-loader'
        }]        
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
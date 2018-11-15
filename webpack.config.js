const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Clean-webpack-plugin config
const pathsToClean = [
    'dist'
];
const cleanOptions = {
    root: __dirname
};

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // Enable sourcemaps for debugging webpack's output
    devtool: 'source-map',
    resolve: {
        // Add .ts and .tsx as resolvable extensions
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            // All files with a .ts or .tsx extension will be handled by awesome-typescript-loader
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            // All output .js files will have any sourcemaps re-processed by source-map-loader
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new CopyWebpackPlugin([{ from: './public/index.html', to: './' }]),
    ]
}
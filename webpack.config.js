var path = require('path');

module.exports = {
    entry: './src/combinatorics.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'combinatorics.js',
        library: 'combinatorics',
        libraryTarget: 'var',
    },
    mode: 'production',
};

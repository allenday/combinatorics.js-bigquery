var path = require('path');

module.exports = {
    entry: './node_modules/combinatorics/dist/combinatorics.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'combinatorics.js',
        library: 'combinatorics',
        libraryTarget: 'var',
    },
    mode: 'production',
};

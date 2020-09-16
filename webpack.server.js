const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/index.ts',
    mode: "production",
    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },

    resolve: {
        modules: [`${root}/node_modules`],
        // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [{
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            test: /\.(ts|tsx)$/,
            exclude: [/node_modules/],
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                      compilerOptions: {
                          noEmit: false
                      },
                    },
                }
            ]
        }]
    }
};

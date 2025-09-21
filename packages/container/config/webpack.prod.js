const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json")

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    output: {
        filename: '[name].[contenthash].js',
    },
    mode: 'production',
    plugins: [
            new ModuleFederationPlugin({
                name: 'container',
                remotes: {
                    marketing: `marketing@${domain}/marketing/remoteEntry.js`,

                },
                shared: packageJson.dependencies
            })
        ],
}


module.exports = merge(commonConfig, prodConfig);
const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { appRoot, publicRoot, fontFamily, webpackTemplatesRoot } = require('./constants.js');

const _mode = process.env.MODE || 'development';
const isProductionMode = _mode === 'production';

module.exports = {
    mode: _mode,
    devtool: 'inline-source-map',
    entry: {
        main: path.join(appRoot, 'src', 'index.js')
    },
    output: {
        path: publicRoot,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: !isProductionMode,
                            modules: {
                                localIdentName: isProductionMode ? '[hash:base64:6]' : '[name]_[local]__[hash:base64:6]'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(publicRoot, 'index.html'),
            template: path.join(
                webpackTemplatesRoot,
                (isProductionMode ? 'index.html.prod' : 'index.html.dev')
            ),
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            attributes: {
                rel: 'stylesheet'
            }
        })
    ]
}

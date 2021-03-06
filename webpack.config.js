const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const optimization = () => {

    const config = {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: 'single'
    }

    if (isProd) {
        config.minimizer = [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    }

    return config
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src') 
        }
    },
    optimization: optimization(),
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.php',
            filename: 'index.php',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/functions.php'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/server.php'),
                    to: path.resolve(__dirname, 'dist')
                }
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.(php)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        esModule: false
                    }
                }
             },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    }, 
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                              plugins: [
                                [
                                  "autoprefixer"
                                ],
                              ],
                            },
                          }
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                              plugins: [
                                [
                                  "autoprefixer"
                                ],
                              ],
                            },
                          }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)/,
                loader: 'file-loader',
                options: {
                    outputPath: 'static/images'
                }
            },
            {
                test: /\.(woff2|woff)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'static/fonts'
                }
            }
        ]
    }
}
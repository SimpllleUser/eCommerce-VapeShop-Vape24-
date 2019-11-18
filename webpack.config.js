const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UnusedModulesWebpackPlugin = require('unused-modules-webpack-plugin').UnusedModulesWebpackPlugin; //Предупртждения про не исполльзуемые файлы
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    //mode: "production", Выбор сборки броекта
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gpj|png|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './img',
                        useRelativePath: true
                    }
                }]
            }
            //     {
            //     test: /\.css$/, //Регулярка для выбора файла с нужным расширением
            //     use: [{
            //             loader: MiniCssExtractPlugin.loader
            //         },
            //         "css-loader"
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./layout/test.html" // Путь с которго обрабатывает html
                //dist/index.html обработаны файл

        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jQuery'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default',
                    {
                        discardCommnets: {
                            removeAll: true
                        }
                    }
                ]
            },
            canPrint: true
        }),
        new UnusedModulesWebpackPlugin({
            patterns: [
                "src/**/**.js",
                "!src/**/**.css",
            ],
            globOptions: { ignore: `node_modules/**/*` },
        }),
        // new CleanWebpackPlugin({
        //     path: './dist/*.*' Очистка от лишних не используемых файлов
        // })
    ]
};
s
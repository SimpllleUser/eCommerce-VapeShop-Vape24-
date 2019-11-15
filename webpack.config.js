const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
            test: /\.css$/, //Регулярка для выбора файла с нужным расширением
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader"
            ]
        }]
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
        })
        // new CleanWebpackPlugin({
        //     path: './dist/*.*' Очистка от лишних не используемых файлов
        // })
    ]
};
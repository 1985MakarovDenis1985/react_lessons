const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugine = require('html-webpack-plugin');


module.exports = {
    entry: {                        //// вход
        app: "./src/index.js",
        // app: "./src/Parent.js"
    },
    output:{                        //// выход
        filename: 'app.js',
        path: path.resolve(__dirname, './dist'),  // resolve - соединяет полный путь (--dirname) с папкой в которой будет файл
        // publicPath: '/dist/'         //// что бы не добавлять этот путь в картиках нужно отключить и вкл в dev ser contentBase: path.join(__dirname, "dist")
    },
    module: {
        rules:[{
            test: /\.js$/,              //// берем все js и с помощью     $ - символизирует конец строки
            loader: "babel-loader",     //// него конвертирует для всех браузеров
            exclude: "/node-modules/"   //// исключает
        }, {
            test: /\.(png|jpg|gif|svg|jpeg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: 'img',
                        name: '[name].[ext]',
                        useRelativePath: true
                    }
                },{
                    loader: "image-webpack-loader",
                    options: {
                        mozjpeg:{
                            quality: 70,
                            progressive: true
                        },
                        optipng:{
                            optimizationLevel: 2
                        }
                    }
                }
            ]
        }, {
            test: /\.(eot|svg|ttf|woff|otf|woff2)$/,
            loader: 'file-loader',
            options: {
                outputPath:'fonts',
                name:'[name].[ext]'
            }
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    // options: {sourceMap: true, config:{ path: 'src/postcss.config.js'}}
                    options: {sourceMap: true, config:{ path: 'src/postcss.config.js'}}

                },
                {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                },
            ]
        }]
    },
    devServer:{
        overlay: true,                                 //// выводит ошибки в черном окне
        contentBase: path.join(__dirname, "src"),     //// в какой папке читать html
        compress: true,
        host: '0.0.0.0',
        useLocalIp: true,
        historyApiFallback: true, //// for routing save history (решил проблему с React routing)
        port: 3030 //// порт
    },
    plugins: [                      //// регестрируем плагины => смотр. на оф сфйтах
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugine({
            // inject: false,
            template: path.join(__dirname, "./src/index.html" )
        }),
    ],
};


// //  npm i @babel/core @babel/preset-env autoprefixer babel-loader browser-sync-webpack-plugin css-loader css-mqpacker cssnano file-loader file-loader mini-css-extract-plugin node-sass path postcss-loader sass-loader style-loader webpack webpack-cli webpack-dev-server image-webpack-loader

// в package.json после scripts прописать: для обхода безопасности cross - адрес разрешение запроса
// пример:
        // "proxy": "http://localhost5000",
        // а в fetch изменить путь на 3000 вместо 5000

// ==================== install for async || await

// npm install --save @babel/runtime
// npm install --save-dev @babel/plugin-transform-runtime
// npm install --save-dev babel-plugin-transform-class-properties

// And, in .babelrc, add:
// {
//     "presets": [
//     "@babel/preset-env",
//     "@babel/preset-react"
//     ],
//
//     "plugins": [
//          ["@babel/transform-runtime"],    => for async || away
//          ["transform-class-properties"]   => for |()=>| experimental syntax
//      ]
// }
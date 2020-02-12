const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    productionSourceMap: false,
    publicPath: './',
    // configureWebpack: config => {
    //     if(process.env.NODE_ENV === 'production'){
    //         return {
    //             plugins: [
    //                 new CompressionPlugin({
    //                     test: /\.js$|\.html$|\.css$/,
    //                     threshold: 4096,
    //                     deleteOriginalAssets: true
    //                 })
    //             ]
    //         }
    //     }
    // }
}
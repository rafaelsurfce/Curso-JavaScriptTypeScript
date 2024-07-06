const path = require('path');

module.exports = {
    mode: 'production', //modo de trabalho
    entry: './src/index.js', //caminho do arquivo de entrada
    output: {
       path: path.resolve(__dirname, 'public', 'assets', 'js'), //local de saída
       filename: 'bundle.js'                                    //arquivo de saída
    },
    module:{
        rules: [{
            exclude: /node_modules/,                            //exclui o node modules de analisar
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets:['@babel/env']
                }
            }

        }]
    },
    devtool: 'source-map'  

};
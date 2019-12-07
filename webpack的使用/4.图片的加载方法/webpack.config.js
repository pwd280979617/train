const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js',  
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader','css-loader'],
        },
        {
          test: /\.(png|jpg|gif|jpeg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: './img/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ],
    },

}
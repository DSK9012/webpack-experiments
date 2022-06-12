const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports={
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname, './dist'),
    publicPath:'dist/'
  },
  mode:'production',
  module:{
    rules:[
      {
        test:/\.(jpg|png)$/,
        type:'asset',
        generator:{
          filename:'static/media/[name]-[hash][ext]'
        },
        parser:{
          dataUrlCondition:{
            maxSize: 8*1024 // 8 kb
          }
        }
      },
      {
        test:/\.txt/,
        type:'asset/source'
      },
      {
        test:/\.css/,
        use:[MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test:/\.scss/,
        use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options: {
            presets:['@babel/env'],
          }
        }
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'styles.[contenthash].css'
    })
  ]
}

const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin'); 

module.exports={
  entry:'./src/index.js',
  output:{
    filename:'bundle.[contenthash].js',
    path:path.resolve(__dirname, './dist'),
  },
  mode:'production',
  module:{
    rules:[
      {
        test:/\.(jpg|png)$/,
        type:'asset',
        generator:{
          filename:'assets/[name]-[hash][ext]'
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
      },
      {
        test:/\.hbs$/,
        use:['handlebars-loader']
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'styles.[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'Webpack Experiments',
      template:'index.hbs'
    })
  ]
}

const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin'); 

module.exports={
  entry:{
    'first-page':'./src/first-page.js',
    'second-page':'./src/second-page.js'
  },
  output:{
    filename:'[name].[contenthash].js',
    path:path.resolve(__dirname, './dist'),
    publicPath:'/static/',
  },
  mode:'production',
  optimization:{
    splitChunks:{
      chunks:'all',
      minSize:3000
    }
  },
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
      filename:'[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename:'first-page.html',
      title:'Webpack Experiments',
      template:'./src/html-template/index.hbs',
      chunks:['first-page'],
    }),
    new HtmlWebpackPlugin({
      filename:'second-page.html',
      title:'Webpack Experiments',
      template:'./src/html-template/index.hbs',
      chunks:['second-page'],
    })
  ]
}

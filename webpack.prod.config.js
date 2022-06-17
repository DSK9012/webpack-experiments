const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin'); 

module.exports={
  entry:{
    'start-page':'./src/index.js',
    'render-image':'./src/hello-world.js'
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
      filename:'start-page.html',
      title:'Webpack Experiments',
      template:'index.hbs',
      chunks:['start-page'],
    }),
    new HtmlWebpackPlugin({
      filename:'render-image.html',
      title:'Webpack Experiments',
      template:'index.hbs',
      chunks:['render-image'],
    })
  ]
}

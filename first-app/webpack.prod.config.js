const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin'); 
const {ModuleFederationPlugin}=require('webpack').container;

module.exports={
  output:{
    filename:'[name].[contenthash].js',
    path:path.resolve(__dirname, './dist'),
    publicPath:'http://localhost:3001/',
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
      filename:'index.html',
      title:'Webpack Experiments - First App',
      template:'./src/html-template/index.hbs',
      chunks:'all',
    }),
    new ModuleFederationPlugin({
      name:'FirstApp',
      filename:'remoteEntry.js',
      exposes:{
        './FirstAppHeader':'./src/components/Header.js',
        './FirstAppAddImage':'./src/components/AddImage.js',
        './FirstAppMainPage':'./src/pages/main.js',
      }
    })
  ]
}

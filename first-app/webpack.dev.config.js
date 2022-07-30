const path=require('path');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin'); 
const {ModuleFederationPlugin}=require('webpack').container;

module.exports={
  entry:'./src/index.js',
  output:{ 
    filename:'[name].bundle.js',
    path:path.resolve(__dirname, './dist'),
    publicPath:'http://localhost:3001/',

  },
  mode:'development',
  devServer:{
    port:3001,
    static:{
      directory:path.resolve(__dirname, './dist')
    },
    devMiddleware:{
      index:'index.js',
      writeToDisk:true
    }
  },
  module:{
    rules:[
      {
        test:/\.(jpg|png)$/,
        type:'asset',
        generator:{
          filename:'assets/[name][ext]'
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
        use:['style-loader', 'css-loader']
      },
      {
        test:/\.scss/,
        use:['style-loader', 'css-loader', 'sass-loader']
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      title:'Webpack Experiments - First App',
      template:'./src/html-template/index.hbs',
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

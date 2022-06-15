const path=require('path');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin'); 

module.exports={
  entry:{
    'start-page':'./src/index.js',
    'render-image':'./src/hello-world.js'
  },
  output:{ 
    filename:'[name].bundle.js',
    path:path.resolve(__dirname, './dist'),
  },
  mode:'development',
  devServer:{
    port:3000,
    static:{
      directory:path.resolve(__dirname, './dist')
    },
    devMiddleware:{
      index:'index.html',
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
      filename:'start-page.html',
      title:'Webpack Experiments',
      template:'index.hbs',
      chunks:['start-page'],
      minify:false
    }),
    new HtmlWebpackPlugin({
      filename:'render-image.html',
      title:'Webpack Experiments',
      template:'index.hbs',
      chunks:['render-image'],
    })
  ]
}

const path=require('path');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin'); 
const {ModuleFederationPlugin}=require('webpack').container;

module.exports={
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
      title:'Webpack Experiments - Home',
      template:'./src/html-template/index.hbs',
    }),
    new ModuleFederationPlugin({
      name:'HomeApp',
      remotes:{
        FirstApp:'FirstApp@http://localhost:3001/remoteEntry.js',
        SecondApp:'SecondApp@http://localhost:3002/remoteEntry.js',
      }
    })
  ]
}

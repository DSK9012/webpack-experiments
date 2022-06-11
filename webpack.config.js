const path=require('path');

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
      }
    ]
  }
}

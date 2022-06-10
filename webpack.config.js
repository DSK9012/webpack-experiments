const path=require('path');

module.exports={
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname, './dist'),
    publicPath:'dist/'
  },
  mode:'development',
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
      }
    ]
  }
}
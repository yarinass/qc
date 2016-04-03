var path = require("path");
module.exports = {
  entry : './app/js/src/main.js',
  output : {
    path: path.resolve(__dirname, "build"),
    filename : 'index.js'
  },
  devServer : {
    inline : true,
    port : 3333
  },
  module : {
    loaders: [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel',
        query : {
          presets : ['es2015', 'react']
        }
      }
    ]
  }
}

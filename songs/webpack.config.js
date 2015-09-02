module.exports = {
  entry: {
    index: './js/index.js',
    // min: ['./js/render.js', './js/model.js']
  },
  output: {
    path: __dirname + '/assets',
    publicPath: '/assets',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'jsx?harmony'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = {
  entry: './src/main.jsx',
  output: {
    filename: './lib/main.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}

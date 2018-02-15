module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'mplan-training.js',
  },
  module: {
    rules: [
      { test: /\.tsx?/, loader: 'awesome-typescript-loader' },
      {
        test: /\.css/, use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { minimize: true } },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
};
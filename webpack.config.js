var path = require('path');
var webpack = require('webpack');

const constants = {
  TEST: process.env.NODE_ENV === 'test',
  HOT: process.env.HOT === 'true',
  LOCAL: process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'api',
  STAGE: process.env.NODE_ENV === 'stage',
  DEVELOP: process.env.NODE_ENV === 'develop',
  PRODUCTION: process.env.NODE_ENV === 'production',
};

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
];

if (constants.PRODUCTION || constants.STAGE) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true
  }));
}

if (constants.LOCAL) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      }
    ],
  }
};

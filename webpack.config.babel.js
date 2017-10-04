import path from 'path';

import webpack from 'webpack';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import HTMLWebpackTemplate from 'html-webpack-template';


const BUILD_DIR = path.resolve(__dirname, 'dist');
const SOURCE_DIR = path.resolve(__dirname, 'src');


const plugins = [];

plugins.push(new HTMLWebpackPlugin({
  appMountId: 'app',
  filename: path.resolve(BUILD_DIR, 'index.html'),
  inject: false,
  mobile: true,
  template: HTMLWebpackTemplate,
  title: 'UltiManager',
}));

plugins.push(new webpack.DefinePlugin({
  'process.env.API_ROOT': JSON.stringify(process.env.API_ROOT),
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
}));


export default {
  devServer: {
    historyApiFallback: true,
    port: 8000,
  },
  entry: path.resolve(SOURCE_DIR, 'index.jsx'),
  module: {
    rules: [
      {
        include: SOURCE_DIR,
        test: /\.jsx?/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/',
  },
  plugins,
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};

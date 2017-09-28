import path from 'path';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import HTMLWebpackTemplate from 'html-webpack-template';


const BUILD_DIR = path.resolve(__dirname, 'dist');
const SOURCE_DIR = path.resolve(__dirname, 'src');


const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  appMountId: 'app',
  filename: path.resolve(BUILD_DIR, 'index.html'),
  inject: false,
  mobile: true,
  template: HTMLWebpackTemplate,
  title: 'UltiManager',
});


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
  },
  plugins: [HTMLWebpackPluginConfig],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};

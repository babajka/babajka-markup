const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                'node_modules/bulma',
                'node_modules/bulma-badge/dist/css/',
                'node_modules/font-awesome/scss',
              ],
            },
          },
        ],
        include: path.resolve(__dirname, '..'),
      },
      {
        test: /\.ejs/,
        exclude: [/node_modules/],
        loader: 'ejs-webpack-loader',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
      },
    ],
  },
};

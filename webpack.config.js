const path = require('path');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['./src/scripts/index.js', './src/styles/index.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'assets/scripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')(),
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: [/\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'public/assets/images/[name].[ext]',
        },
      }
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: [
          'default',
        ]
      },
      canPrint: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/main.css'
    })
  ]
};
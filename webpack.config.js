const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');

const publicFolder = path.resolve(__dirname, 'public');
const srcFolder = path.resolve(__dirname, 'src');

/**
 * Use this array in order to extend scss loaders rules
 *
 * @type {Array.<Object>}
 */
const defaultStyleLoaders = [
  {
    loader: 'postcss-loader',
    options: {
      /**
       * Postcss autoprefixer
       * https://github.com/postcss/autoprefixer
       */
      plugins: [
        autoprefixer({
          browsers: ['Safari >= 9', 'last 2 versions']
        })
      ]
    }
  },
  /**
   * Handle sass files
   * https://github.com/webpack-contrib/sass-loader
   */
  'sass-loader'
];

const config = {
  /**
   * Define configuration mode
   * https://webpack.js.org/concepts/mode/
   */
  mode: process.env.NODE_ENV,

  /**
   * Source maps
   * https://webpack.js.org/configuration/devtool/
   */
  devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false,

  /**
   * Entry application point
   * https://webpack.js.org/concepts/entry-points/
   */
  entry: [
    path.resolve(srcFolder, 'index.tsx')
  ],

  /**
   * Output options
   */
  output: {
    publicPath: '/',
    path: publicFolder,
    filename: process.env.NODE_ENV !== 'production' ? '[hash].bundle.js' : '[hash].bundle.min.js'
  },

  /**
   * Options affecting the resolving of modules
   * https://webpack.js.org/configuration/resolve/
   */
  resolve: {
    modules: [srcFolder, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.json','.scss', '.css']
  },

  /**
   * Webpack dev server configuration
   * https://webpack.js.org/configuration/dev-server/
   */
  devServer: {
    port: 2019,
    contentBase: publicFolder,
    historyApiFallback: true,
    hot: true
  },

  module: {
    /**
     * List of loaders
     *
     * babel-loader: transpile code (ES6/ES7) into ES5
     * https://github.com/babel/babel-loader
     *
     * file-loader
     * https://github.com/webpack-contrib/file-loader
     *
     * Convert scss to css and extract to separate file
     * https://github.com/jtangelder/sass-loader
     * https://github.com/postcss/postcss-loader
     */
    rules: [
      {
        test: /\.tsx?$/,
        include: [srcFolder],
        loader: 'babel-loader'
      },

      {
        test: /\.(ttf|eot|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?name=fonts/[folder]/[name].[ext]'
      },

      {
        test: /\.(png|jpeg|jpg|svg|gif)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production'
              }
            }
          ]
        })
      },

      {
        test: /\.scss$/,
        include: [path.resolve(srcFolder, 'components')],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production',
                modules: true,
                namedExport: true,
                camelCase: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            ...defaultStyleLoaders
          ]
        })
      },

      {
        test: /\.scss$/,
        exclude: [path.resolve(srcFolder, 'components')],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production'
              }
            },
            ...defaultStyleLoaders
          ]
        })
      }
    ]
  },

  /**
   * List of plugins
   *
   * HtmlWebpackPlugin: copy index.html as a template and inject scripts
   * https://github.com/jaketrent/html-webpack-template
   *
   * CleanWebpackPlugin: clear 'public' folder
   * https://github.com/johnagan/clean-webpack-plugin
   *
   * ExtractTextPlugin: create separate files
   * https://github.com/webpack/extract-text-webpack-plugin
   *
   * BundleAnalyzerPlugin: show app graph
   * https://github.com/webpack-contrib/webpack-bundle-analyzer
   *
   * Configure hot reloading
   * https://webpack.js.org/plugins/hot-module-replacement-plugin
   */
  plugins: [
    new webpack.WatchIgnorePlugin([
      /scss\.d\.ts$/
    ]),

    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(srcFolder, 'index.html')
    }),

    new CleanWebpackPlugin(publicFolder, {
      root: __dirname,
      verbose: true
    }),

    new ExtractTextPlugin({
      filename: process.env.NODE_ENV !== 'production' ? '[hash].styles.css' : '[hash].style.min.css',
      allChunks: true,
      disable: process.env.NODE_ENV === 'development'
    }),

    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ],

  /**
   * Apply optimization
   * https://webpack.js.org/configuration/optimization/#optimization-minimizer
   */
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  }
};

module.exports = config;

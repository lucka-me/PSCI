const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

module.exports = {
  entry: {
    potori: './src/potori.ts',
  },
  output: {
    filename: 'lib/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 1,
      maxInitialRequests: 7,
      cacheGroups: {
        service: {
          test: /[\\/]src[\\/]service[\\/]/,
          name: 'service',
          priority: 40,
        },
        ui: {
          test: /[\\/]src[\\/]ui[\\/]/,
          name: 'ui',
          priority: 40,
        },
        data: {
          test: /[\\/]src[\\/]data[\\/]/,
          name: 'data',
          priority: 30,
        },
        locales: {
          test: /[\\/]src[\\/]locales[\\/]/,
          name: 'locales',
          priority: 30,
        },
        mdc: {
          test: /[\\/]node_modules[\\/]@material/,
          name: 'mdc',
          priority: 20,
          reuseExistingChunk: true,
        },
        modules: {
          test: /[\\/]node_modules[\\/]/,
          name: 'modules',
          priority: 15,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 8000,
    contentBasePublicPath: '/potori/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    //new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'i18next',
          path: 'i18next.min.js'
        },
        {
          name: 'i18next-browser-languagedetector',
          var:  'i18nextBrowserLanguageDetector',
          path: 'i18nextBrowserLanguageDetector.min.js'
        },
        {
          name: 'moment',
          cdn:  'moment.js',
          path: 'moment.min.js',
        },
        {
          name:   'chart.js',
          var:    'Chart',
          cdn:    'Chart.js',
          path:   'Chart.min.js',
        },
        {
          name: 'firebase',
          paths: [
            'firebase-app.min.js', 'firebase-database.min.js'
          ]
        },
        {
          name:   'mapbox-gl',
          var:    'mapboxgl',
          path:   'mapbox-gl.min.js',
          style:  'mapbox-gl.min.css',
        },
        {
          name:     '@fortawesome/fontawesome-free',
          cdn:      'font-awesome',
          cssOnly:  true,
          styles: [
            'css/fontawesome.min.css',
            'css/solid.min.css'
          ],
        }
      ],
      prodUrl: 'https://cdnjs.cloudflare.com/ajax/libs/:name/:version/:path'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false,
      scriptLoading: 'defer',
      chunks: [ 'potori' ],
      filename: 'index.html',
      meta: {
        'description' : 'Web App to Visualize Ingress Nominations',
        'viewport'    : 'width=device-width, height=device-height, initial-scale=1',
        'theme-color' : '#3b1e5f',

        'apple-mobile-web-app-capable'          : 'yes',
        'apple-mobile-web-app-status-bar-style' : 'dark',
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
        { from: 'manifest.json' },
      ],
    }),
  ],
};
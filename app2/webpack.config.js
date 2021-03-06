const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { makeWebpackConfig } = require('webpack-simple');

const config = makeWebpackConfig();

module.exports = {
  ...config,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    // open: true,
    port: 8082,
    host: '0.0.0.0',
  },
  plugins: [
    new ModuleFederationPlugin({
      // Not sure if `name` is used by other apps (`library.name` is used)
      name: 'app2',
      remotes: {
        // - Key defined here is used in module import paths
        // - root `appName@` matches `library.name` in app1 webpack config
        // - remoteEntry matches `filename` in app1 webpack config
        appFoo: 'appBar@//0.0.0.0:8081/remoteEntry.js',
      },
      // Shared dependencies need to be lazy loaded, either with `bundle-loader` (lazy: true)
      // or by dynamically importing bootstrap.js in index. See here for more info:
      // https://medium.com/dev-genius/module-federation-advanced-api-inwebpack-5-0-0-beta-17-71cd4d42e534
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './index.template.html',
      filename: './index.html',
    }),
  ],
};

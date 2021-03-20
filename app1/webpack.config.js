const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { makeWebpackConfig } = require('webpack-simple');

const { APP1_PORT } = process.env;

const config = makeWebpackConfig();

module.exports = {
  ...config,
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist', 'app1'),
    compress: true,
    hot: true,
    open: true,
    port: APP1_PORT,
    // host: '0.0.0.0',
  },
  output: {
    path: path.join(__dirname, '..', 'dist', 'app1'),
    filename: '[name].[contenthash:8].js',
  },
  optimization: {
    chunkIds: 'named',
  },
  plugins: [
    new ModuleFederationPlugin({
      // Consuming apps' `remotes` use `name` if `library.name` is not defined.
      name: 'hostApp',
      // filename is used as entrypoint in other apps `remotes`
      filename: 'remoteEntry.js',
      // - `library.name` is used as root in other apps' `remotes` values
      // - Haven't found documentation for library options or types, but they seem
      // pretty self-explanatory. For example, type: 'window' puts the exposed lazy
      // modules on the window... actually it looks like they're on the window anyway :think:
      // library: { type: 'var', name: 'hostLib' },
      exposes: {
        './Header': './src/Header',
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

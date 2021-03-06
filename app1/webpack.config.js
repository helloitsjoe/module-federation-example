const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { makeWebpackConfig } = require('webpack-simple');

const config = makeWebpackConfig();

console.log(config);

module.exports = {
  ...config,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    // open: true,
    port: 8081,
    host: '0.0.0.0',
  },
  plugins: [
    new ModuleFederationPlugin({
      // Not sure if `name` is used by other apps (`library.name` is used)
      name: 'app1',
      // filename is used as entrypoint in
      filename: 'remoteEntry.js',
      // `library.name` is used as root in other apps' `remotes` values
      library: { type: 'var', name: 'appBar' },
      exposes: {
        './Button': './src/Button',
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

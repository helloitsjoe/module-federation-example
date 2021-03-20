const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { makeWebpackConfig } = require('webpack-simple');

const { HOST_APP_PORT, CONSUMING_APP_PORT } = process.env;

const config = makeWebpackConfig();

module.exports = (env, argv) => {
  const remoteHost =
    argv.mode === 'production'
      ? 'helloitsjoe.github.io/module-federation-example/host'
      : `0.0.0.0:${HOST_APP_PORT}`;

  return {
    ...config,
    devServer: {
      contentBase: path.join(__dirname, '..', 'dist', 'consumer'),
      compress: true,
      hot: true,
      open: true,
      port: CONSUMING_APP_PORT,
      // host: '0.0.0.0',
    },
    output: {
      path: path.join(__dirname, '..', 'dist', 'consumer'),
      filename: 'main.[contenthash:8].js',
    },
    optimization: {
      chunkIds: 'named',
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'consumingApp',
        remotes: {
          // - Key defined here is used in module import paths
          // - root `appName@` matches `library.name` in host webpack config,
          //   or `name` if `library` is not defined.
          // - remoteEntry matches `filename` in host webpack config
          host: `hostApp@//${remoteHost}/remoteEntry.js`,
          // host: `hostLib@//${remoteHost}/remoteEntry.js`,
        },
        // Shared dependencies need to be lazy loaded, either with `bundle-loader` (lazy: true)
        // or by dynamically importing bootstrap.js in index. See here for more info:
        // https://medium.com/dev-genius/module-federation-advanced-api-inwebpack-5-0-0-beta-17-71cd4d42e534
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
      }),
      new HtmlWebpackPlugin({
        template: './index.template.html',
        filename: './index.html',
      }),
    ],
  };
};

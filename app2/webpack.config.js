const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { makeWebpackConfig } = require('webpack-simple');

const { APP1_PORT, APP2_PORT } = process.env;

const config = makeWebpackConfig();

module.exports = (env, argv) => {
  const remoteHost =
    argv.mode === 'production'
      ? 'helloitsjoe.github.io/module-federation-example/app1'
      : `0.0.0.0:${APP1_PORT}`;

  return {
    ...config,
    devServer: {
      contentBase: path.join(__dirname, '..', 'dist', 'app2'),
      compress: true,
      hot: true,
      open: true,
      port: APP2_PORT,
      // host: '0.0.0.0',
    },
    output: {
      chunkFilename: '[name].[contenthash:8].js',
      path: path.join(__dirname, '..', 'dist', 'app2'),
      filename: 'main.[contenthash:8].js',
    },
    plugins: [
      new ModuleFederationPlugin({
        // Not sure where `name` is used, consuming apps use `library.name`.
        name: 'app2',
        remotes: {
          // - Key defined here is used in module import paths
          // - root `appName@` matches `library.name` in app1 webpack config
          // - remoteEntry matches `filename` in app1 webpack config
          appFoo: `appBar@//${remoteHost}/remoteEntry.js`,
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

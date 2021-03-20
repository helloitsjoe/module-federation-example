import React from 'react';
// Root import path (hostApp) defined in webpack config 'remotes' keys.
// Import can be eager or lazy
const Header = React.lazy(() => import('host/Header'));
// import Header from 'host/Header';

const HeaderFallback = () => (
  <div
    style={{ height: '80px', width: '100%', backgroundColor: 'lightgray' }}
  />
);

const hostUrl =
  process.env.NODE_ENV === 'production'
    ? '/module-federation-example/host'
    : 'http://localhost:8081';

export const App = () => {
  return (
    <div>
      <React.Suspense fallback={<HeaderFallback />}>
        <Header />
      </React.Suspense>

      <div style={{ padding: '2em' }}>
        <h1>Hello from the consuming app!</h1>
        <p>
          This is an example of module federation using Webpack 5. The header is
          shared from the host app and consumed by this app. If you open
          devtools to the Network tab, you'll see most requests going to
          `/consumer`, but `remoteEntry.js` and the Header requests going to
          `/host`.
        </p>
        <p>
          In the console you can also access `window.hostApp`, which includes a
          `get()` method that returns the exposed modules wrapped in a promise.
        </p>
        <a href={hostUrl}>Go back to the host app</a>
      </div>
    </div>
  );
};

export default App;

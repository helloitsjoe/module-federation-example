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

const url =
  process.env.NODE_ENV === 'production'
    ? '/module-federation-example/app1'
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
          shared from the host app and consumed by this app.
        </p>
        <a href={url}>Go to the host app</a>
      </div>
    </div>
  );
};

export default App;

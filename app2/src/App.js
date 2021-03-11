import React from 'react';

// root import path (appFoo) defined in webpack config 'remotes' keys
import Header from 'appFoo/Header';

// Can be eager or lazy
// const Header = React.lazy(() => import('appFoo/Header'));

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
      <h1>Hello from App 2!</h1>
      <p>
        This is an example of module federation using Webpack 5. The header is
        shared between this app and app 1.
      </p>
      <a href={url}>Go to App 1</a>
    </div>
  );
};

export default App;

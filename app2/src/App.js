import React from 'react';

// root import path defined in webpack config 'remotes' keys
const LazyHeader = React.lazy(() => import('appFoo/Header'));

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
        <LazyHeader />
      </React.Suspense>
      <h1>Hello from App 2!</h1>
      <a href={url}>Go to App 1</a>
    </div>
  );
};

export default App;

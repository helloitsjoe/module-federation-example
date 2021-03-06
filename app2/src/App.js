import React from 'react';

// root import path defined in webpack config 'remotes' keys
const LazyHeader = React.lazy(() => import('appFoo/Header'));

const HeaderFallback = () => (
  <div
    style={{ height: '80px', width: '100%', backgroundColor: 'lightgray' }}
  />
);

export const App = () => {
  return (
    <div>
      <React.Suspense fallback={<HeaderFallback />}>
        <LazyHeader />
      </React.Suspense>
      <h1>Hello from App 2!</h1>
    </div>
  );
};

export default App;

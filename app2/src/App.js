import React from 'react';

// root import path defined in webpack config 'remotes' keys
const LazyButton = React.lazy(() => import('appFoo/Button'));

export const App = () => {
  return (
    <div>
      <h1>Hello from App 2!</h1>
      <React.Suspense fallback="Loading button...">
        <LazyButton />
      </React.Suspense>
    </div>
  );
};

export default App;

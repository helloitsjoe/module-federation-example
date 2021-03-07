import React from 'react';
import Header from './Header';

const url =
  process.env.NODE_ENV === 'production'
    ? '/module-federation-example/app2'
    : 'http://localhost:8082';

export const App = () => {
  return (
    <div>
      <Header />
      <h1>Hello from App 1!</h1>
      <a href={url}>Go to App 2</a>
    </div>
  );
};

export default App;

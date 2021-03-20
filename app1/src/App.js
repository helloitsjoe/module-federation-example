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
      <div style={{ padding: '2em' }}>
        <h1>Hello from the host app!</h1>
        <p>
          This is an example of module federation using Webpack 5. The header is
          hosted on this app's server and consumed by the consuming app.
        </p>
        <a href={url}>Go to the consuming app</a>
      </div>
    </div>
  );
};

export default App;

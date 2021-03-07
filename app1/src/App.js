import React from 'react';
import Header from './Header';

export const App = () => {
  return (
    <div>
      <Header />
      <h1>Hello from App 1!</h1>
      <a href="/app2">Go to App 2</a>
    </div>
  );
};

export default App;

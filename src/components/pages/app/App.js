import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../home';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;

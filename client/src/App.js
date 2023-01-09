import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './Users';

function App() {

  return (
    <Router>
      <div>
        <div>
          <Route exact path="/" component={Users} />
        </div>
      </div>
    </Router>
  );
}

export default App;
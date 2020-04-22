import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

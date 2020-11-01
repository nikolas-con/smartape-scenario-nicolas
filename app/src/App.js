import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserProfile from './components/screens/UserProfile'
import Users from './components/screens/Users'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/users"]} component={Users} exact />
        <Route path="/profile/:id/:index" component={UserProfile} exact />
      </Switch>
    </Router>
  );
}

export default App;

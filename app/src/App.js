import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavicationBar from './components/navicationBar'
import UserProfile from './screens/UserProfile'
import Users from './screens/Users'
import Context from './utilities/context'

const App = () => {

  const [userId, setUserId] =useState('')
  const value = {
    userId,
    setUserId
  }
  return (
    <Router>
      <Context.Provider value={value}>
        <NavicationBar/>
        <Switch>
          <Route path={["/", "/users"]}  component={Users} exact/>
          <Route path="/profile/:id"  component={UserProfile} exact/>
        </Switch>
      </Context.Provider>
    </Router>
  );
}

export default App;

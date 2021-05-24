import React from 'react';
import {Route,Switch} from 'react-router-dom';

function App() {
  return <div className="App">
    <Switch>    
    <Route exact path='/'>
      This is home page
    </Route>
    <Route exact path='/starred'>
      This is starred page
    </Route>
    <Route>This is 404 page</Route>
    </Switch>

  </div>;
}

export default App;

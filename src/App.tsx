import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Body from './Components/Body/body';
import SearchBar from './Components/SearchBar/search-bar';
import Card from './Components/Card/card';



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Body/>
          </Route>
          <Route exact path='/card/:id'>
            <SearchBar/>
            <Card/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

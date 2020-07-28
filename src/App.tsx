import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Body from './Components/Body/body';
import SearchBar from './Components/SearchBar/search-bar';
import Card from './Components/Card/card';
import Type from './Components/Type/type';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          
          <Route exact path='/'>
            <SearchBar/>
            
            <Body/>
          </Route>
          <Route exact path='/card/:id'>
            <SearchBar/>
            
            <Card/>
          </Route>
          <Route exact path='/type/:id'>
            <SearchBar/>
            
            <Type/>
          </Route>

        </Switch>
      
        
        
      </div>
    </Router>
  );
}

export default App;

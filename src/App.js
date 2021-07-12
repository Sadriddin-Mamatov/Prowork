import React from 'react';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          
        </Switch>
      </BrowserRouter>
    </main>

  );
}

export default App;

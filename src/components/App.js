import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';
import Header from './common/Header';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

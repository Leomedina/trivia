import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Trivia from './pages/Trivia';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Trivia /></Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
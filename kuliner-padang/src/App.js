import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Sukses } from './pages';

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <main>
            <Switch>
              <Route  path="/" component={Home} exact/>
              <Route  path="/sukses" component={Sukses} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
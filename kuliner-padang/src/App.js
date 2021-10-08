import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavigationBar } from './components';
import { Home, Sukses } from './pages';

const navigations = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu'},
];

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <NavigationBar title1 = "kuliner" title2 = "Padang" navigations = {navigations} />
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
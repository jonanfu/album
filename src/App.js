import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

import AppNav from './components/AppNav'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav>

        </AppNav>
      </div>
    );
  }
}
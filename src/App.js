import { Component } from 'react';
import Router from "./components/Router.js";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Router />
      </div>
    );
  }
}

export default App;
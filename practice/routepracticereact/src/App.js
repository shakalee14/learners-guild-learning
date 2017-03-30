import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'
import './App.css';

import About from './About.js'
import Home from './Home.js'
import Repos from './Repos.js'

class App extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', ()=> {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    var Child
    switch (this.state.route){
      case '/about' : Child = About; break;
      case '/repos' : Child = Repos; break;
      default:        Child = Home;
    }

    return (
      <div>
        <header> Routing App </header>
        <menu>
          <ul>
            <li> <a href="#/about"> About </a> </li>
            <li> <a href="#/repos"> Repos </a> </li>
          </ul>
        </menu>
      </div>
    );
  }
}

export default App

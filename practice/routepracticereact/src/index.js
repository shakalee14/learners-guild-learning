import React, { Component } from 'react';
import { render } from 'react-dom'
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'
import './App.css';


import About from './About.js'
import Home from './Home.js'
import Repos from './Repos.js'
import RepoDetails from './RepoDetails.js'

class App extends Component {
  render() {
    return (
      <div>
        <header> Routing App </header>
        <menu>
          <ul>
            <li><Link to="/about" activeClassName="active"> About </Link> </li>
            <li><Link to="/repos" activeClassName="active"> repos </Link> </li>
          </ul>
        </menu>
        {this.props.children}
      </div>
    );
  }
}

render((
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About} title="About Us" />
        <Route path="repos" component={Repos}>
          <Route path="details/:repo_name" component={RepoDetails}/>
        </Route>
      </Route>
    </Router>
  ), document.getElementById('root')
);

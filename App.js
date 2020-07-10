import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Hello from "./Hello"
import Action from "./Action"
import Another from "./Another"
import conf from "./_config"

export default () => (
  <Router>
    <div className="container">

      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">{conf.siteTitle}</span>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/action" className="dropdown-item">
                Action
              </Link>
              <Link to="/another" className="dropdown-item">
                Another action
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/hello" className="dropdown-item">
                Hello Bootstrap!
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/action">
          <Action />
        </Route>
        <Route path="/another">
          <Another />
        </Route>
        <Route path="/hello">
          <Hello name="Bootstrap"/>
        </Route>
      </Switch>
    
  </Router>
);

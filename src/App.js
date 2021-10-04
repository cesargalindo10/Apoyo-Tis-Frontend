import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./css/styles.css"
import Home1 from "./components/Home";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <div className="navbar">
            <ul className="navbar-justify">
{   /*           <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/about"></Link>
              </li>
              <li>
                <Link to="/dashboard"></Link>
</li>*/}
           </ul>
        </div>





        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
     <Home1/>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

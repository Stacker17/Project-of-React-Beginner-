import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import About from "./About";
import Users from "./Users";
import Home from "./Home";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Pwa🔫</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/users">Users</Link>
            </Nav.Link>
            <Nav.Link></Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

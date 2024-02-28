import { Amplify } from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Foot from "./footer/Foot";

import { FiLogOut } from "react-icons/fi";

import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';

Amplify.configure(awsExports);

function App({ signOut, user }) {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Welcome />
      break
    case "/home":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    default:
  }

  return (
      <div>
        <Navbar className="justify-content-between" bg="light" expand="lg">
            <Container>
              <img src="https://www.metrosystems.co.th/wp-content/uploads/2018/04/new-metrol-logo-animate.gif" alt=""  style={{width: 70 }} />&nbsp;&nbsp;
              <Navbar.Brand href="/">Project : Power BI</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <NavLink href="/home">
                      <button className="butter">Home</button>
                    </NavLink>
                    <NavLink href="/about">
                      <button className="butter">About</button>
                    </NavLink>
                    <NavLink href="https://www.metrosystems.co.th/home-th/" target="_blank">
                      <button className="butter">Website</button>
                    </NavLink>
                  </Nav>
                    <div className="me-auto"></div>
                    <button className="hello">Hello : {user.username}</button>
                    <button className="signout" onClick={signOut}>Sign out &nbsp; <FiLogOut /></button>
                </Navbar.Collapse>
            </Container>
          </Navbar>

        {component}
        <br />
        <Foot />
      </div>
  );
}

export default withAuthenticator(App);

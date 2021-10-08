import React, { createContext , useContext } from "react";
import {Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const UserContext = createContext();

function NavigationBar(props) {
  const { navigations, title1, title2 } = props;
  return (
    <UserContext.Provider value={"User"}>
    <Navbar variant="dark" expand="lg" sticky="top">
      <Navbar.Brand style={{ fontSize: '30px' }} href="#home">{title1} <strong>{title2}</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto container-fluid" defaultActiveKey="#menu">
          {navigations.map((navigation) => (
          <Nav.Link style={{ fontSize: '20px' }} href={navigation.href}>{navigation.name}</Nav.Link>
          ))}
            <DisplayUser/>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    </UserContext.Provider>
  );
};

function DisplayUser() {
  const value = useContext(UserContext);
  return (
    <Nav.Item className="ml-auto">
      <Nav.Link style={{ fontSize: '20px' }} href=""><FontAwesomeIcon icon={faUserCircle} /> {value}</Nav.Link>
    </Nav.Item>
);
}

export default NavigationBar;

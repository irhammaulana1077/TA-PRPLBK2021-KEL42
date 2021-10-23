import React, { createContext , useContext, useState } from "react";
import {Button, Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faShoppingCart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const UserContext = createContext();

function NavigationBar(props) {
  const { navigations, title1, title2, toggleShow, keranjangs } = props;

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
            <Nav.Item className="ml-auto">
              <Button variant="outline-light" onClick={toggleShow}>{keranjangs.length !== 0 ? <FontAwesomeIcon icon={faCartPlus} /> : <FontAwesomeIcon icon={faShoppingCart} />}</Button>
            </Nav.Item>
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
    <Nav.Item className="ml-3">
      <Nav.Link style={{ fontSize: '20px' }} href=""><FontAwesomeIcon icon={faUserCircle} /> {value}</Nav.Link>
    </Nav.Item>
);
}

export default NavigationBar;

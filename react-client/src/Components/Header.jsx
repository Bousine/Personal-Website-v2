import React from 'react'
import NavButton from './HeaderComp/NavButton'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Header(){


  return(
    <div>
      <Navbar id="navbar" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="navbuttons" className="mr-auto justify-content-center">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="https://github.com/Bousine" target="_blank">Projects</Nav.Link>
            <Nav.Link href="https://bit.ly/2p96env" target="_blank">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand id="brandname">Asif Hasan</Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Header

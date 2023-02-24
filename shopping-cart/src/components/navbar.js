import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {HiUserCircle} from 'react-icons/hi';
function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" style={{padding:"10px 20px 10px 20px"}}>
      <Container fluid>
        <Navbar.Brand href="#home" style={{fontWeight:"bolder",fontSize:"32px"}}>ShopC</Navbar.Brand>
        <Navbar.Brand style={{fontSize:"14px",fontFamily:"monospace"}}>A place where we meet your expectations</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example" >
        </Navbar.Collapse>
        <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Filter"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">{"Price < 10k"}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {"10k-50k"}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{"Price > 50k"}</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        <HiUserCircle color='white' size={"38px"} style={{marginLeft:"32px"}} onClick={()=>console.log("User icon clicked!!!")}></HiUserCircle>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;
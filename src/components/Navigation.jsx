
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


export function Navigation(){
    return (<>
        
            <Navbar  bg="dark" variant="dark" expand='md' className="mb-3" sticky="top" >
              <Container fluid>
                <Navbar.Brand href="#">
                 <img
              src="logo sup guru white.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstra</span>
                  p logo"
            /> 
                
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Offcanvas
                  
                  aria-labelledby='offcanvasNavbarLabel-expand-md'
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                      SupGuru
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                      <Nav.Link href="#catalogGladiator">Gladiator</Nav.Link>
                      <Nav.Link href="#catalogIboard">iBoard</Nav.Link>
                      <Nav.Link href="#header">Funwater</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id='offcanvasNavbarDropdown-expand-md'
                      >
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
            
            </>
    )
}
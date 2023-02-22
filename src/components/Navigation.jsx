
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';


export function Navigation(){
    return (<>
        
            <Navbar  bg="dark" variant="dark" expand='md' className="mb-3" sticky="top" >
              <Container >
                <Navbar.Brand >
                 <img
              src="logo sup guru white.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> <span className="navbar_brand_text">SUPGURU</span>
                
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
                      
                    </Nav>
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
            
            </>
    )
}
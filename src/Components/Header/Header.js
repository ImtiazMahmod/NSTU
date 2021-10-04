import { faFacebook, faGooglePlus, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import  {Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const headerStyle="navlink text-decoration-none px-3 py-2"
    return (
      <div>
        {/* campus header */}
        <Container>
        <Row xs={1} sm={1} md={2} className="top-header py-3">
            <Col xs={12} sm={12} md={2}>
              <img className="w-25 d-block mx-auto" src="./images/logo.gif" alt="" />
            </Col>
            
            <Col xs={12} sm={12} md={9} >
              <h1>Noakhali Science and Technology University</h1>
            </Col>
        </Row>
        </Container>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="me-auto sticky-top">             
                   
                <NavLink className={headerStyle} to="/home">Home</NavLink>           
            
                
                  <NavLink className={headerStyle} to="/about">About Us</NavLink>
              
                
                  <NavLink className={headerStyle} to="/academic">Academic/Service</NavLink>         
             
              
      <NavDropdown title="Administration"  id="collasible-nav-dropdown"  >
                <NavDropdown.Item  className="bg-dark border-bottom">                  
                <NavLink className={headerStyle} to="/chancellor">Chancellor</NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="bg-dark border-bottom">
                <NavLink className={headerStyle} to="/vice-chancellor">Vice Chancellor</NavLink>
                </NavDropdown.Item>
                
                <NavDropdown.Item className="bg-dark">
                <NavLink className={headerStyle} to="/pro-vice-chancellor">Pro Vice Chancellor</NavLink>
                </NavDropdown.Item>
        
      </NavDropdown>
      </Nav>

      </Navbar.Collapse>
            
            <div className="text-light">
            <FontAwesomeIcon className='mx-2' icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon className='mx-2' icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon className='mx-2' icon={faGooglePlus}></FontAwesomeIcon>
            <FontAwesomeIcon className='mx-2' icon={faLinkedinIn}></FontAwesomeIcon>
           </div>
      </Container>
  </Navbar>
  </div>
        </div>
    );
};

export default Header;
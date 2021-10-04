import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer pt-5 mt-auto">
        <Container>
        <Row xs={1} sm={1} md={2} lg={4}>
                <Col className="link d-flex flex-column bd-highlight mb-3">
                <h5 className="text-light">USEFUL LINKS</h5>
                <NavLink to="">UGC</NavLink>
                <NavLink to="">Ministry of Education</NavLink>
                <NavLink to="">Office of Chancellor </NavLink>
                <NavLink to="">Office of Prime minister </NavLink>
            </Col>
            <Col className="link d-flex flex-column bd-highlight mb-3">
                <h5  className="text-light">CENTER/CELL</h5>
                <NavLink to="">Research Cell</NavLink>
                <NavLink to="">Cyber Center</NavLink>
                <NavLink to="">IQAC</NavLink>
                <NavLink to="">ICT Cell</NavLink>
            </Col>
            <Col className="link d-flex flex-column bd-highlight mb-3">
                <h5  className="text-light">FACILITIES</h5>
                <NavLink to="">Hall of Residence</NavLink>
                <NavLink to="">Medical Center</NavLink>
                <NavLink to="">Central Library</NavLink>
                <NavLink to="">Auditorium</NavLink>
            </Col>
            <Col >
                <h5  className="text-light">CONTACT & MAILING ADDRESS</h5>
                        <p className="text-light"><FontAwesomeIcon icon={faHome} /> Postal Code: 3814</p>
                <p  className="text-light"><FontAwesomeIcon icon={faPhone} /> Phone: +88-0321-72720</p>
                <p  className="text-light"><FontAwesomeIcon icon={faMailBulk} /> Email: registrar@office.nstu.edu.bd</p>
            </Col>
                

        </Row>
        
        </Container>
            <div className="bg-dark p-4 text-center">
                <span className="text-muted"><p>Copyright © 2021 | Noakhali Science and Technology University | All Rights Reserved</p></span>
            </div>
        </div>
    );
};

export default Footer;
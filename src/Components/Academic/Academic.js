import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Academic.css'

const Academic = () => {
    const [academic, setAcademic] = useState([])
    
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data=> setAcademic(data))
    },[])
    return (
        <div>
            <div className="my-5">
            {
                <Container>
               <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                   {academic.map(ac => (
                 <Col key={ac.name}>
                   <Card style={{height: '100%'}}>
                     <Card.Img className="cardImg" variant="top" src={ac.img} />
                     <Card.Body>
                       <Card.Title>{ac.faculty? ac.faculty : ac.institute}</Card.Title>
                       <Card.Text>
                         Admition Fee: {ac.admissionFee}
                        </Card.Text>
                                   
                        <NavLink to={`/academic/${ac.name}`} className="btn-regular">
                       Details
                      </NavLink>
                                  
                     </Card.Body>
                   </Card>
                 </Col>
               ))}
                    </Row>
                    </Container>
            }

            </div>
        </div>
    );
};

export default Academic;
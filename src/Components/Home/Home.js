import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Campus from '../Campus/Campus'


const Home = () => {
    const [academic, setAcademic] = useState([])
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data=>setAcademic(data))
    }, [])
 
    return (
      <div>
        {/* carousel on campus */}
        <Campus></Campus>

        {/* academic  */}
            <div className="my-5">
            {
                <Container>
               <Row xs={1} sm={2} md={2} lg={4} className="g-4">
               {academic.slice(0,4).map(ac => (
                 <Col key={ac.name}>
                   <Card style={{height: '100%'}}>
                     <Card.Img className="p-1 h-50 rounded" variant="top" src={ac.img} />
                     <Card.Body>
                       <Card.Title>{ac.faculty}</Card.Title>
                       <Card.Text>
                         Admition Fee: {ac.admissionFee}
                       </Card.Text>
                       {/* detail button */}
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

export default Home;
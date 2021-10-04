import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Campus.css'
const Campus = () => {
    return (
        <div className="my-4">
        <Container>
            <Row sm={1} md={1} lg={2} >
                <Col  sm={12} md={12} lg={9}>
            <Carousel >
        <Carousel.Item className="carousel">
            <img
            className="d-block w-100"
            src='./images/campus-1.jpg'
            alt="campus-1"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./images/campus-2.png"
             alt="campus-2"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./images/campus-3.jpg"
            alt="campus-3"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./images/campus-4.jpg"
            alt="campus-4"
            />
        </Carousel.Item>
        </Carousel>
        </Col>
        <Col className="d-flex justify-content-center " sm={12} md={12} lg={3}>
                    <Card className="text-center text-light rounded p-2 bg-dark" style={{ width: '20rem', height: '100%'}}>
            <Card.Img className="rounded" variant="top" src="./images/VC.png" />
            <Card.Body>
                <Card.Title >অধ্যাপক ড. মো. দিদার-উল-আলম</Card.Title>
                <Card.Text>
                উপাচার্য
                </Card.Text>
                
            </Card.Body>
            </Card>
         
          </Col>
    </Row>
        </Container>
        </div>
    );
};

export default Campus;
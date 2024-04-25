import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutUsPage = () => {
  return (
    <Container fluid className="p-0">
      <Row
        className="align-items-center"
        style={{
          background: 'url(images/back.jpg) center center no-repeat',
          backgroundSize: 'cover',
          height: '75vh',
        }}
      >
        <Col className="text-center text-white" md={12}>
          <h1>Explore the World of Art</h1>
          <p>Discover, Connect, and Acquire Extraordinary Art Pieces</p>
        </Col>
      </Row>

      <Row className="my-5 justify-content-center">
        <Col md={8}>
          <h2 className="text-center">Our Mission</h2>
          <p>
            Our mission is to democratize the art market by making it easy and
            accessible for artists to showcase and sell their work to a global
            audience, while also providing collectors with unparalleled access
            to unique pieces from around the world.
          </p>
        </Col>
      </Row>

      <Row className="my-4 justify-content-center">
        <Col md={12}>
          <h2 className="text-center">Meet the Team</h2>
        </Col>
        {['Alice', 'Bob', 'Segar'].map((name, index) => (
          <Col md={4} key={index} className="my-3">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={`images/${name.toLowerCase()}.jpg`}
              />
              <Card.Body>
                <Card.Title className="Artistname">{name}</Card.Title>
                <Card.Text>
                  {name} brings a unique blend of passion and expertise to the
                  art world, making our platform a vibrant community for artists
                  and art lovers alike.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Call to Action */}
      <Row className="my-5 bg-dark text-white">
        <Col md={12} className="text-center p-5">
          <h2>Join Our Community</h2>
          <p>
            Connect with the world’s most talented artists and enrich your space
            with beautiful artwork.
          </p>
          <Button variant="primary-about">Contact Us</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;

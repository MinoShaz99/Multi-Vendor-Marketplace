import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './CSS/ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero-section text-center py-5">
        <h1>Contact Us</h1>
        <p>
          Got a question? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="contactForm.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactForm.Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactForm.Message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message"
                />
              </Form.Group>

              <Button variant="primary-contactus" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <Card className="p-3">
              <Card.Title className="contactI">Contact Information</Card.Title>
              <p>
                Email: support@ceylonartclub.com
                <br />
                Phone: +9476 380 4022
                <br />
                Address: Main Street, Colombo, Sri Lanka
              </p>
              <Card.Title className="contactI">Contact Via </Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsPage;

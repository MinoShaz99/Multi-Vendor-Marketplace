import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import './CSS/JoinUsAsSeller.css';

function JoinUsAsSeller() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="seller-custom-card">
        <div className="text-center icon-container">
          <img
            src="./images/s1.png"
            alt="Join as Seller"
            className="icon-img mb-3"
          />
          <Card.Title className="mb-4">
            Become a Ceylon Art Club Member
          </Card.Title>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Contact No</Form.Label>
            <Form.Control type="text" placeholder="Enter your phone number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formbasicstatus">
            <Form>
              <label>Artist Status : </label>
              <Form.Check type="radio" label="Rising Artist" name="Gender" />

              <Form.Check
                type="radio"
                label="Established Artist"
                name="Gender"
              />
            </Form>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formuploadartwork">
            <Form.Label>Upload Artwork</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button
            variant="primary-seller"
            type="submit"
            className="w-100 custom-submit-btn"
          >
            Submit Application
          </Button>
          <p className="text-muted mt-0">
            We respect your privacy. Your information is secure and will never
            be shared.<a href="/privacy-policy">Learn more</a>
          </p>
        </Form>
      </Card>
    </Container>
  );
}

export default JoinUsAsSeller;

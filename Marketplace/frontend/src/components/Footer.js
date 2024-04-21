import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-4">
      <Container>
        <Row>
          <Col sm={6} md={3}>
            <h5>About Helabima</h5>
            <p>
              Discover the world's art online. We offer an unparalleled
              selection of paintings, drawings, sculpture, and photography in
              various price ranges.
            </p>
          </Col>
          <Col sm={6} md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/featured">Featured Artists</a>
              </li>
              <li>
                <a href="/collections">Collections</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/help">Customer Support</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/returns">Returns</a>
              </li>
              <li>
                <a href="/shipping">Shipping Information</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h5>Follow Us</h5>
            <div className="social-media-links">
              <a
                href="https://www.facebook.com/helabima"
                className="text-light me-2"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/helabima"
                className="text-light me-2"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com/helabima"
                className="text-light me-2"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com/company/helabima"
                className="text-light"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>
              © {new Date().getFullYear()} Helabima Art Gallery. All Rights
              Reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

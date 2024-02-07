import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
  // ho voluto inserire la logica per l'anno corrente
  // ma ho dovuto gogglare perchè non so ancora come si fa
  //però volevo metterlo come il compito precedente
  const [annoCorrente, setAnnoCorrente] = useState("");

  useEffect(() => {
    const dataCorrente = new Date();
    const anno = dataCorrente.getFullYear();
    setAnnoCorrente(anno);
  }, []);

  return (
    <footer>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6}>
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={4} lg={4}>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#link" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#link" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#link" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#link" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button
                  variant="outline-dark"
                  className="footer-button rounded-0 mt-3"
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-{annoCorrente} Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

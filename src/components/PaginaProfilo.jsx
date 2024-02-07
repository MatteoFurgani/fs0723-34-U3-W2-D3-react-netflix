import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const PaginaProfilo = () => {
  const lingueDisponibili = ["Italian", "Japanese", "German", "Spanish"];
  const defaultLingua = "English";
  let linguaSelezionata = defaultLingua;

  const handleLanguageChange = (selectedLanguage) => {
    linguaSelezionata = selectedLanguage;
  };

  return (
    <div>
      <main>
        <Container className="w-25 mt-5">
          <h1 className="text-bold">Edit Profile</h1>
          <Row className="g-2">
            <hr />
            <Col className="position-relative">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="../avatar.png"
                  alt="avatar"
                  width="100px"
                  height="100px"
                />
                <i className="bi bi-pencil-square position-absolute bottom-0 start-0 ps-1 z-1"></i>
              </div>
            </Col>
            <Col>
              <Button variant="secondary" className="pe-5">
                Strive Student
              </Button>
              <h5 className="opacity-50 mt-5">Language:</h5>
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  className="bg-dark border-white"
                >
                  {linguaSelezionata}
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-secondary">
                  {lingueDisponibili.map((lingua, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleLanguageChange(lingua)}
                      className="text-white"
                    >
                      {lingua}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <hr className="mb-4" />
              <h5 className="opacity-50">Maturity Settings:</h5>
              <Button variant="secondary" size="sm" className="my-3">
                ALL MATURITY RATINGS
              </Button>
              <p className="small">
                Show titles of all maturity ratings for this profile
              </p>
              <Button variant="outline-secondary" className="px-3 mb-3">
                Edit
              </Button>
              <hr />
              <h5 className="mt-4 opacity-50">Autoplay controls</h5>
              <p>
                <i className="bi bi-check-square"></i> Autoplay next episode in
                a series on all devices.
              </p>
              <p>
                <i className="bi bi-check-square"></i> Autoplay previews while
                browsing on all devices.
              </p>
            </Col>
          </Row>
          <hr />
          <footer>
            <Container className="mb-3">
              <Row className="justify-content-center">
                <Col>
                  <Button
                    variant="outline-secondary"
                    className="btn-light btn-sm"
                  >
                    SAVE
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-secondary" className="mx-3 btn-sm">
                    CANCEL
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-secondary" className="btn-sm">
                    DELETE PROFILE
                  </Button>
                </Col>
              </Row>
            </Container>
          </footer>
        </Container>
      </main>
    </div>
  );
};

export default PaginaProfilo;

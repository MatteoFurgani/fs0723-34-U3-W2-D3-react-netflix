import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";
import Galleria from "./Galleria";

const GalleriaFilm = function () {
  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-between mt-4">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <DropdownButton
                title="Genres"
                variant="secondary"
                size="sm"
                className="rounded-0 ms-4 mt-1"
                style={{ backgroundColor: "#221f1f" }}
              >
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Horror</Dropdown.Item>
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <Row className="justify-content-center">
          <h2 className="mt-3">STAR WARS SAGA</h2>
          <Galleria film="Star Wars" />

          <h2 className="mt-3">MARVEL SAGA</h2>
          <Galleria film="Marvel" />

          <h2 className="mt-3">HARRY POTTER SAGA</h2>
          <Galleria film="Harry Potter" />
        </Row>
      </Container>
    </>
  );
};
export default GalleriaFilm;

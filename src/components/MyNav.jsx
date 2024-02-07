import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Link className="nav-link fw-bold" to="/">
          <img
            src="../logo.png"
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Link>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link className="nav-link fw-bold" to="/">
              Home
            </Link>
            <Link className="nav-link fw-bold" to="/TV-Show">
              TV Shows
            </Link>
            <Link className="nav-link fw-bold" to="/">
              Movies
            </Link>
            <Link className="nav-link fw-bold" to="/">
              Recently Added
            </Link>
            <Link className="nav-link fw-bold" to="/">
              My List
            </Link>
            <Link className="nav-link fw-bold" to="/Profile">
              Profile
            </Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

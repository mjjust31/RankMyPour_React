import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <div className="welcome-user">Welcome, User</div>
          <Navbar.Brand as={Link} to="/">
            🍷 RankMyPour
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/profile">
                  My Wine Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/tasting">
                  Single Tasting
                </Nav.Link>
                <Nav.Link as={Link} to="/multi-tasting">
                  Wine Showdown
                </Nav.Link>
                <Nav.Link as={Link} to="/events">
                  My Events
                </Nav.Link>
                {false && (
                  <Nav.Link as={Link} to="/my-wineries">
                    My Wineries
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

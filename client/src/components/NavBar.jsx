import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useDrink } from "../contexts/DrinkContext";
import { capitalizeFirstLetter } from "../helpers/stringHelpers";

export default function NavBar() {
  const { drinkType } = useDrink();


  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <div className="welcome-user">Welcome, User</div>
          <Navbar.Brand as={Link} to="/">
            🍷 RankMyPour
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/profile">
                  My {capitalizeFirstLetter(drinkType)} Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/tasting">
                  Single {capitalizeFirstLetter(drinkType)} Tasting
                </Nav.Link>
                <Nav.Link as={Link} to="/multi-tasting">
                {capitalizeFirstLetter(drinkType)} Showdown
                </Nav.Link>
                <Nav.Link as={Link} to="/events">
                  My Events
                </Nav.Link>
          
           
                {/* Conditionally Render Winery or Brewery Link */}
                {false && drinkType === 'wine' && (
                  <Nav.Link as={Link} to="/my-wineries">
                    My Wineries
                  </Nav.Link>
                )}
                {false && drinkType === 'beer' && (
                  <Nav.Link as={Link} to="/my-breweries">
                    My Breweries
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

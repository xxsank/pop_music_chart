import React, { PureComponent } from "react";

import { Container } from "styled-container-component";
import { Navbar, NavbarLink } from "styled-navbar-component";
import { Nav } from "styled-nav-component";

export default class NavbarComponent extends PureComponent {
  render() {
    return (
      <Container fluid>
        <Navbar expandSm>
          <Nav>
            <NavbarLink brand href="/">
              Music Chart
            </NavbarLink>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

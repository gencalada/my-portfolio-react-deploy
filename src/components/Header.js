import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const email = "gvasquezencalada@gmail.com";
  return (
    <>
      <Nav className="nav">
        <NavItem>
          <NavLink className="nav-link" to="/" activeclassname="active-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            to="/aboutme"
            activeclassname="active-link"
          >
            About Me
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            to="/projects"
            activeclassname="active-link"
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link"
            to="/contactme"
            activeclassname="active-link"
          >
            Contact Me
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default Header;

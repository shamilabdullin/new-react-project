import React from "react";
import { StyledHeader, Nav } from "./styles";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { theme } from "../../config/theme";

const AppHeader = () => {
  return (
    <StyledHeader>
      <GoMarkGithub color={theme.colors.primary} size={50} />
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/popular">popular</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default AppHeader;

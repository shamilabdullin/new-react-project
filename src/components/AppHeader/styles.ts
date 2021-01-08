import styled from "styled-components";
import { theme } from "../../config/theme";

export const StyledHeader = styled.header`
  padding: 1rem;
  background-color: ${theme.colors.tileGrey};
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    margin-left: ${theme.spacing.normal};
    font-weight: 700;
    li {
      margin-right: ${theme.spacing.normal};
      a {
        text-decoration: none;
        color: whitesmoke;
      }
    }
  }
`;

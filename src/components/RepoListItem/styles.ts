import styled from "styled-components";
import { theme } from "../../config/theme";

export const StyledRepoItem = styled.div`
  background-color: ${theme.colors.tileGrey};
  padding: ${theme.spacing.normal};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Description = styled.p`
  color: ${theme.colors.textSecondary};
`;

export const Details = styled.ul<{ color: string }>`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.textSecondary};
  li {
    display: inline-block;
  }

  li:first-of-type span {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

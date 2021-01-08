import styled from "styled-components";
import { theme } from "../../config/theme";

export const StyledButton = styled.button`
  display: inline-block;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  padding: 0.8rem;
  line-height: 1;
  background: ${theme.colors.primary};
  border-radius: 3px;
  -webkit-appearance: none;
  color: white;

  &:active,
  &:hover {
    background: #512da8;
    cursor: pointer;
  }
`;

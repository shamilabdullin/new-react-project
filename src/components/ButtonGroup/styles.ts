import styled from "styled-components";
import { theme } from "../../config/theme";

export const StyledButtonGroup = styled.div`
  button {
    min-width: 85px;
    margin-right: ${theme.spacing.normal};
    margin-bottom: ${theme.spacing.normal};
  }
`;

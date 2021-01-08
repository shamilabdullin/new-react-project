import styled from "styled-components";
import { theme } from "../../config/theme";

export const StyledCard = styled.div`
  background-color: ${theme.colors.tileGrey};
  padding: ${theme.spacing.normal};
  display: flex;
`;

export const UserInfo = styled.div`
  background-color: ${theme.colors.tileGrey};
  padding: 0 ${theme.spacing.normal};
`;

export const Img = styled.figure`
  margin-right: ${theme.spacing.normal};
  max-width: 300px;
`;

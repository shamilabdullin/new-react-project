import styled from "styled-components";

export const StyledContainer = styled.div<{ maxWidth: number }>`
  max-width: ${props => props.maxWidth}px;
  margin: 0 auto;
`;

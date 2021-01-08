import styled from "styled-components";

export const StyledInput = styled.input<{ marginBottom: number }>`
  width: 100%;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: rgb(255, 255, 255);
  transition: all 0.2s ease 0s;
  outline: none;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: inherit;
  margin-bottom: ${props => props.marginBottom}px;
`;

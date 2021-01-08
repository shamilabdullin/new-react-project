import React from "react";
import { StyledContainer } from "./styles";

interface IProps {
  children: React.ReactNode;
  maxWidth?: number;
}

const Container = ({ children, maxWidth = 1900 }: IProps) => {
  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
};

export default Container;

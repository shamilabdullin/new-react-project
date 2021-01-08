import React from "react";
import { StyledButtonGroup } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const ButtonGroup = ({ children }: IProps) => {
  return <StyledButtonGroup>{children}</StyledButtonGroup>;
};

export default ButtonGroup;

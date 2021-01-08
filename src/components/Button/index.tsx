import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, onClick, type = "button" }: IProps) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;

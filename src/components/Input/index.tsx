import React from "react";
import { StyledInput } from "./styles";

interface IInputProps {
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  marginBottom?: number;
}

const Input = ({
  value,
  type = "text",
  onChange,
  id,
  marginBottom = 0
}: IInputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      marginBottom={marginBottom}
    />
  );
};

export default Input;

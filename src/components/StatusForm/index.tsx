import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { StyledForm } from "./styles";
import { UPDATE_STATUS } from "../../Mutations";
import { useMutation } from "@apollo/react-hooks";

const StatusForm = () => {
  const [value, setValue] = useState("");
  const [changeUserStatus, { data }] = useMutation(UPDATE_STATUS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    changeUserStatus({ variables: { message: value } });
    setValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="status-message">Update status</label>
      <Input
        id="status-message"
        value={value}
        onChange={handleChange}
        marginBottom={10}
      />
      <Button type="submit">submit</Button>
    </StyledForm>
  );
};

export default StatusForm;

import React, { useState } from "react";
import Container from "../../components/Container";
import UserList from "../../components/UserList";
import Input from "../../components/Input";

const Search = () => {
  const [formValue, setFormValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(formValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  // /test

  return (
    <Container>
      <h1>User search</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 15, maxWidth: 500 }}>
        <Input value={formValue} onChange={e => handleChange(e)} />
      </form>
      <UserList searchTerm={searchTerm} />
    </Container>
  );
};

export default Search;

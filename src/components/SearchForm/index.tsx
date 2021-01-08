import React, { useState } from "react";
import Input from "../Input";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(searchTerm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {searchTerm}
      <Input value={searchTerm} onChange={e => handleChange(e)} />
    </form>
  );
};

export default SearchForm;

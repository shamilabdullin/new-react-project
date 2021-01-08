import React, { useState } from "react";
import RepoList from "../../components/RepoList";
import ButtonGroup from "../../components/ButtonGroup";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import ErrorBoundary from "../../components/ErrorBoundary";
import Container from "../../components/Container";

const Popular = () => {
  const [language, setLanguage] = useState("javascript");

  return (
    <Container maxWidth={1900}>
      <Heading size={"1.2rem"} marginBottom={15}>
        popular repositories
      </Heading>
      <ButtonGroup>
        <Button onClick={() => setLanguage("javascript")}>JS</Button>
        <Button onClick={() => setLanguage("typescript")}>TS</Button>
        <Button onClick={() => setLanguage("css")}>CSS</Button>
      </ButtonGroup>
      <ErrorBoundary>
        <RepoList language={language} />
      </ErrorBoundary>
    </Container>
  );
};

export default Popular;

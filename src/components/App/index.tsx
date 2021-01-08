import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import client from "../../apollo-client";
import { GlobaStyles } from "../../config/globalstyles";
import Layout from "../Layout";
import Search from "../../pages/Search";
import Popular from "../../pages/Popular";
import Account from "../../pages/Account";
import UserProfile from "../../pages/UserProfile";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobaStyles />
      <Router>
        <Layout>
          <Switch>
            <Route path="/popular">
              <Popular />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/users/:id">
              <UserProfile />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ApolloProvider>
  );
};

export default App;

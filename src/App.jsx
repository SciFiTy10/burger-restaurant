import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppContextProvider from "./Context/AppContextProvider";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Amplify, Auth } from "aws-amplify";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </Router>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;

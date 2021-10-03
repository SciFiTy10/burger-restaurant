import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../Context/AppContextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInPage from "../../../../Pages/SignInPage";
import HomePage from "../../../../Pages/HomePage";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

//mock the useLocation hook
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useLocation: () => ({
//     //set the pathname to the home page
//     pathname: jest.fn(),
//   }),
// }));

//mock the useMediaQuery hook
jest.mock("@material-ui/core", () => ({
  ...jest.requireActual("@material-ui/core"),
  useMediaQuery: () => ({
    breakpoints: jest.fn(),
  }),
}));

describe("sign in button", () => {
  it("takes you to the sign in page", () => {
    const { getByLabelText, debug } = render(
      <AppContextProvider>
        <Router>
          <Switch>
            <Route path="/signin">
              <SignInPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </AppContextProvider>
    );

    //click the cart button
    userEvent.click(getByLabelText("sign in button"));
    debug();
    //check whether the Sign In text is displayed
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});

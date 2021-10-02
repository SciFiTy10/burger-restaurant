import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../Context/AppContextProvider";
import Header from "../Header";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SignInPage from "../../../../Pages/SignInPage";

//mock the useLocation hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    //set the pathname to the home page
    pathname: "/",
  }),
}));

describe("sign in button", () => {
  it("takes you to the sign in page", () => {
    const { getByLabelText } = render(
      <AppContextProvider>
        <Header />
        <SignInPage />
      </AppContextProvider>
    );

    //click the cart button
    userEvent.click(getByLabelText("sign in button"));
    //check whether the Sign In text is displayed
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});

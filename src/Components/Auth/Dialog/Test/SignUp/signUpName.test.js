import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../../Context/AppContextProvider";
import AuthDialogContainer from "../../Container/AuthDialogContainer";
import Header from "../../../../Layout/Header/Header";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Auth } from "aws-amplify";

//mock the useLocation hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    //set the pathname to the home page
    pathname: "/",
  }),
}));

describe("sign up name", () => {
  it("requires a name", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByLabelText, getByText, getByPlaceholderText } = render(
      <AppContextProvider>
        <Header />
        <AuthDialogContainer />
      </AppContextProvider>
    );

    //click the sign in button
    userEvent.click(getByLabelText("sign in button"));
    //check whether the Sign into your account text displayed
    expect(screen.getByText("Sign into your account")).toBeInTheDocument();
    //click the create account text
    userEvent.click(getByText("Create account"));
    //check whether the Create a new account text displayed
    expect(screen.getByText("Create a new account")).toBeInTheDocument();
    //click into name field
    userEvent.click(screen.getByPlaceholderText("Enter your name"));
    //click into password field
    userEvent.click(screen.getByPlaceholderText("Enter your password"));
    //check for Name is required text
    expect(screen.getByText("Name is required.")).toBeInTheDocument();
    //ensure sign in button is disabled
    expect(screen.getByLabelText("sign up button")).toBeDisabled();
  });
});

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

describe("render sign in", () => {
  it("renders the sign in dialog", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByLabelText } = render(
      <AppContextProvider>
        <Header />
        <AuthDialogContainer />
      </AppContextProvider>
    );

    //click the sign in button
    userEvent.click(getByLabelText("sign in button"));
    //check whether the Sign into your account text displayed
    expect(screen.getByText("Sign into your account")).toBeInTheDocument();
  });

  it("renders returns to the sign in dialog from the sign up dialog", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByLabelText, getByText } = render(
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
    //click the Sign In text
    userEvent.click(getByLabelText("back to sign in link"));
    //check whether the Create a new account text displayed
    expect(screen.getByText("Sign into your account")).toBeInTheDocument();
  });
});

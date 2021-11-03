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

describe("sign in email", () => {
  it("requires an email", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByLabelText, getByPlaceholderText } = render(
      <AppContextProvider>
        <Header />
        <AuthDialogContainer />
      </AppContextProvider>
    );

    //click the sign in button
    userEvent.click(getByLabelText("sign in button"));
    //check whether the Sign into your account text displayed
    expect(screen.getByText("Sign into your account")).toBeInTheDocument();
    //click into email field
    userEvent.click(screen.getByPlaceholderText("Enter your email"));
    //click into password field
    userEvent.click(screen.getByPlaceholderText("Enter your password"));
    //check for Email is required text
    expect(screen.getByText("Email is required.")).toBeInTheDocument();
    //ensure sign in button is disabled
    expect(
      screen.getByLabelText("sign in dialog sign in button")
    ).toBeDisabled();
  });

  it("throws an error on an invalid email", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByLabelText, getByPlaceholderText } = render(
      <AppContextProvider>
        <Header />
        <AuthDialogContainer />
      </AppContextProvider>
    );

    //click the sign in button
    userEvent.click(getByLabelText("sign in button"));
    //check whether the Sign into your account text displayed
    expect(screen.getByText("Sign into your account")).toBeInTheDocument();
    //send a bad value into the email input
    userEvent.type(screen.getByPlaceholderText("Enter your email"), "test");
    //click into password field
    userEvent.click(screen.getByPlaceholderText("Enter your password"));
    //check for Email must be in valid format displayed
    expect(
      screen.getByText("Email must be in valid format (ex: user@test.com)")
    ).toBeInTheDocument();
    //ensure sign in button is disabled
    expect(
      screen.getByLabelText("sign in dialog sign in button")
    ).toBeDisabled();
  });
});

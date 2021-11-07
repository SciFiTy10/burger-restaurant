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

describe("sign up confirm password", () => {
  it("requires a confirm password", () => {
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
    //click into password field
    userEvent.click(screen.getByPlaceholderText("Re-enter your password"));
    //click into email field
    userEvent.click(screen.getByPlaceholderText("Enter your email"));
    //check for please re-enter your password text
    expect(
      screen.getByText("Please re-enter your password.")
    ).toBeInTheDocument();
    //ensure sign in button is disabled
    expect(screen.getByLabelText("sign up button")).toBeDisabled();
  });

  it("throws an error when this doesn't match the entered password", () => {
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
    //type a password into password field
    userEvent.type(
      screen.getByPlaceholderText("Enter your password"),
      "Validpassword123!"
    );
    //type a mismatch into the confirm password field
    userEvent.type(
      screen.getByPlaceholderText("Re-enter your password"),
      "Validpassword123"
    );
    //click into email field
    userEvent.click(screen.getByPlaceholderText("Enter your email"));
    //check for password helper text
    expect(
      screen.getByText("Confirm Password must match password above.")
    ).toBeInTheDocument();
    //ensure sign in button is disabled
    expect(screen.getByLabelText("sign up button")).toBeDisabled();
  });

  it("masks passwords by default", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByLabelText, getByPlaceholderText, getByText, queryByText } =
      render(
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
    //type thistextishidden into password field
    userEvent.type(
      screen.getByPlaceholderText("Re-enter your password"),
      "thistextishidden"
    );
    //click into email field
    userEvent.click(screen.getByPlaceholderText("Enter your email"));
    //check for Email is required text
    expect(screen.queryByText("thistextishidden")).toBeNull();
    //ensure sign in button is disabled
    expect(screen.getByLabelText("sign up button")).toBeDisabled();
  });

  it("shows the password when the view icon is clicked", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const {
      getByLabelText,
      getByPlaceholderText,
      queryByText,
      getByText,
      getByDisplayValue,
    } = render(
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
    //type thistextwillshow into password field
    userEvent.type(
      screen.getByPlaceholderText("Re-enter your password"),
      "thistextwillshow"
    );
    //click the toggle visibility button
    userEvent.click(getByLabelText("toggle confirm password visibility"));
    //check for thistextwillshow
    expect(screen.getByDisplayValue("thistextwillshow")).toBeInTheDocument();
    //ensure sign in button is disabled
    expect(screen.getByLabelText("sign up button")).toBeDisabled();
  });
});

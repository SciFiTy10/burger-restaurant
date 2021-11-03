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

describe("sign in password", () => {
  it("requires a password", () => {
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
    //click into password field
    userEvent.click(screen.getByPlaceholderText("Enter your password"));
    //click into email field
    userEvent.click(screen.getByPlaceholderText("Enter your email"));
    //check for Email is required text
    expect(screen.getByText("Password is required.")).toBeInTheDocument();
    //ensure sign in button is disabled
    expect(
      screen.getByLabelText("sign in dialog sign in button")
    ).toBeDisabled();
  });

  it("masks passwords by default", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByLabelText, getByPlaceholderText, queryByText } = render(
      <AppContextProvider>
        <Header />
        <AuthDialogContainer />
      </AppContextProvider>
    );

    //click the sign in button
    userEvent.click(getByLabelText("sign in button"));
    //check whether the Sign into your account text displayed
    expect(screen.getByText("Sign into your account")).toBeInTheDocument();
    //type thistextishidden into password field
    userEvent.type(
      screen.getByPlaceholderText("Enter your password"),
      "thistextishidden"
    );
    //click into email field
    userEvent.click(screen.getByPlaceholderText("Enter your email"));
    //check for Email is required text
    expect(screen.queryByText("thistextishidden")).toBeNull();
    //ensure sign in button is disabled
    expect(
      screen.getByLabelText("sign in dialog sign in button")
    ).toBeDisabled();
  });

  it("shows the password when the view icon is clicked", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByLabelText, getByPlaceholderText, queryByText } = render(
      <AppContextProvider>
        <Header />
        <AuthDialogContainer />
      </AppContextProvider>
    );

    //click the sign in button
    userEvent.click(getByLabelText("sign in button"));
    //check whether the Sign into your account text displayed
    expect(screen.getByText("Sign into your account")).toBeInTheDocument();
    //type thistextwillshow into password field
    userEvent.type(
      screen.getByPlaceholderText("Enter your password"),
      "thistextwillshow"
    );
    //click the toggle visibility button
    userEvent.click(getByLabelText("toggle password visibility"));
    //check for thistextwillshow
    expect(screen.getByText("thistextwillshow")).toBeInTheDocument();
    //ensure sign in button is disabled
    expect(
      screen.getByLabelText("sign in dialog sign in button")
    ).toBeDisabled();
  });
});

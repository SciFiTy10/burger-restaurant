import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../../Context/AppContextProvider";
import Menu from "../../Menu";
import NotificationContainer from "../../../Notification/Container/NotificationContainer";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../../../Theme/theme";
import { CssBaseline } from "@material-ui/core";
import { Auth } from "aws-amplify";

describe("the snackbar", () => {
  it("should display the item that was added from the menu", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <Menu />
          <NotificationContainer />
        </AppContextProvider>
      </ThemeProvider>
    );

    //add an item from the menu
    userEvent.click(getByTestId("add one Royale With Cheese menu 1"));

    //the message should display in the snackbar
    expect(
      screen.getByText("Success! 1 Royale With Cheese was added to the cart")
    ).toBeInTheDocument();
  });

  it("should display the item that was removed from the menu", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <Menu />
          <NotificationContainer />
        </AppContextProvider>
      </ThemeProvider>
    );

    //add an item from the menu
    userEvent.click(getByTestId("add one Royale With Cheese menu 1"));
    //add a 2nd item from the menu
    userEvent.click(getByTestId("add one Royale With Cheese menu 1"));

    //remove an item from the menu
    userEvent.click(getByTestId("remove one Royale With Cheese menu 1"));

    //the message should display in the snackbar
    expect(
      screen.getByText(
        "Success! 1 Royale With Cheese was removed from the cart"
      )
    ).toBeInTheDocument();
  });
});

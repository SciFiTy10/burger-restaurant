import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../../../Context/AppContextProvider";
import CartDialogContainer from "../../Container/CartDialogContainer";
import Header from "../../../../../Layout/Header/Header";
import Menu from "../../../../Menu/Menu";
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

describe("adding an item in the cart", () => {
  it("adds one of an item which exists in the cart", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByLabelText, getByTestId } = render(
      <AppContextProvider>
        <Header />
        <Menu />
        <CartDialogContainer />
      </AppContextProvider>
    );

    //add an item from the menu
    userEvent.click(getByTestId("add one Royale With Cheese menu 1"));

    //click the cart button
    userEvent.click(getByLabelText("shopping cart button"));

    //add one of the item from the cart
    userEvent.click(getByTestId("add one Royale With Cheese cart 1"));

    //there should be a count of 1 for the item in the cart
    expect(
      screen
        .getByTestId("amount of Royale With Cheese cart 1")
        .querySelector("input")
    ).toHaveValue("2");
  });
});

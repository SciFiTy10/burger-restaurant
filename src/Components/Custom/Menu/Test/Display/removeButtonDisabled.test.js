import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../../Context/AppContextProvider";
import Menu from "../../Menu";
import "@testing-library/jest-dom";
import { Auth } from "aws-amplify";

describe("the remove button", () => {
  it("should be disabled if the count is 0", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByTestId } = render(
      <AppContextProvider>
        <Menu />
      </AppContextProvider>
    );

    //the menu should have a 0 count for this item by default
    expect(
      screen
        .getByTestId("amount of Royale With Cheese menu 1")
        .querySelector("input")
    ).toHaveValue("0");

    //the remove button should be disabled
    expect(
      screen.getByTestId("remove one Royale With Cheese menu 1")
    ).toBeDisabled();
  });
});

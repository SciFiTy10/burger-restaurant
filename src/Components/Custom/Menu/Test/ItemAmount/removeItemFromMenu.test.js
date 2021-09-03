import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../../Context/AppContextProvider";
import Menu from "../../Menu";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("removing an item from the menu list", () => {
  it("should decrement the text field value by 1", () => {
    const { getByTestId } = render(
      <AppContextProvider>
        <Menu />
      </AppContextProvider>
    );

    //add 1 item
    userEvent.click(getByTestId("add one Royale With Cheese menu 1"));
    //add a 2nd item
    userEvent.click(getByTestId("add one Royale With Cheese menu 1"));

    //remove an item
    userEvent.click(getByTestId("remove one Royale With Cheese menu 1"));

    //the count should be 1
    expect(
      screen
        .getByTestId("amount of Royale With Cheese menu 1")
        .querySelector("input")
    ).toHaveValue("1");
  });
});

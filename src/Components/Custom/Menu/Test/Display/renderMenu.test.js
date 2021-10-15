import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../../Context/AppContextProvider";
import Menu from "../../Menu";
import "@testing-library/jest-dom";
import { Auth } from "aws-amplify";

describe("menu", () => {
  test("renders Menu component", () => {
    //mock the currentAuthenticatedUser method
    jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
      return Promise.resolve("done");
    });
    const { getByText } = render(
      <AppContextProvider>
        <Menu />
      </AppContextProvider>
    );

    expect(screen.getByText("Royale With Cheese")).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../../../../../Context/AppContextProvider";
import Menu from "../../Menu";
import "@testing-library/jest-dom";

describe("menu", () => {
  test("renders Menu component", () => {
    const { getByText } = render(
      <AppContextProvider>
        <Menu />
      </AppContextProvider>
    );

    expect(screen.getByText("Royale With Cheese")).toBeInTheDocument();
  });
});

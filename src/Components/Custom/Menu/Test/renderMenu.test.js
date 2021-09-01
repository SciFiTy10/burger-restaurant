import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../../Context/app-context";
import Menu from "../Menu";

describe("menu", () => {
  test("renders Menu component", () => {
    //create a menu array
    const menu = [];
    beforeAll(() => {
      //create a menu
      menu.push(
        {
          id: 1,
          title: "Royale With Cheese",
          description: "You know what they call a quarter pounder in France?",
          price: 9.99,
        },
        {
          id: 2,
          title: "What Burger",
          description:
            "What ain't no burger I ever heard of, they speak English in what?",
          price: 10.99,
        },
        {
          id: 3,
          title: "Marvin Special",
          description: "The only burger in town without a top bun",
          price: 8.99,
        }
      );
    });
    afterAll(() => {
      //destroy the menu
      menu.splice(0, menu.length);
    });

    const wrapper = ({ children }) => (
      <AppContext.Provider
        value={{
          menu,
        }}
      >
        {children}
      </AppContext.Provider>
    );

    render(<Menu />, { wrapper });

    expect(screen.getByText("Royale With Cheese")).toBeInTheDocument();
  });
});

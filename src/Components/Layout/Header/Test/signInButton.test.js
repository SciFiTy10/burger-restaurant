import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("sign in button", () => {
  it("takes the user to the sign in page", () => {
    const { getByLabelText } = render(
        <Header />
    );

    //click the cart button
    userEvent.click(getByLabelText("sign in button"));
    //check whether the Cart is empty text displayed
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });

//   it("renders a cart with an item", () => {
//     const { getByLabelText, getByTestId } = render(
//       <AppContextProvider>
//         <Header />
//         <Menu />
//         <DialogContainer />
//       </AppContextProvider>
//     );

//     //add an item from the menu
//     userEvent.click(getByTestId("add one Royale With Cheese menu 1"));

//     //click the cart button
//     userEvent.click(getByLabelText("shopping cart button"));

//     //there should be a count of 1 for the item in the cart
//     expect(
//       screen
//         .getByTestId("amount of Royale With Cheese cart 1")
//         .querySelector("input")
//     ).toHaveValue("1");
//   });
// });

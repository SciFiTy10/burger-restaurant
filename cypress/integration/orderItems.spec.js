describe("order", () => {
  it("should order an item", () => {
    //go to the app
    cy.visit("http://localhost:3000/");
    //add an item to the cart
    cy.get('[data-testid="add one Royale With Cheese menu 1"]').click();
    //open the cart
    cy.get('[aria-label="shopping cart button"]').click();
    //verify the item is in the cart
    cy.get('[data-testid="amount of Royale With Cheese cart 1"]')
      .children()
      .within(() => {
        cy.get("input").should("have.value", "1");
      });
    //click the order button
    cy.contains("Order").click();
    //verify the snackbar displays that the order was complete
    cy.get(".MuiAlert-message").should(
      "have.text",
      "Success! Your order was submitted."
    );
  });
});

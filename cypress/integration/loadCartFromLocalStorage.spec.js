describe("load cart from local storage", () => {
  it("should keep the same cart after reloading the page", () => {
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

    //close the cart dialog
    cy.contains("Close").click();

    //reload the page
    cy.reload();

    //open the cart
    cy.get('[aria-label="shopping cart button"]').click();

    //verify the item is still in the cart
    cy.get('[data-testid="amount of Royale With Cheese cart 1"]')
      .children()
      .within(() => {
        cy.get("input").should("have.value", "1");
      });

    //close the cart dialog
    cy.contains("Close").click();
  });
});

describe("sign into account", () => {
  it("let you navigate to your account page", () => {
    //go to the app
    cy.visit("http://localhost:3000/");
    //click the sign in button
    cy.get('[aria-label="sign in button"]').click();
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
  });
});

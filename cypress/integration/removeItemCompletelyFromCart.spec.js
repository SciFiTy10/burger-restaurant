describe("remove item completely", () => {
  beforeEach(() => {
    //go to the app
    cy.visit("http://localhost:3000/");
  });

  it("should remove the item completely from the user's cart (executed from the menu)", () => {
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

    //click the minus button
    cy.get('[data-testid="remove one Royale With Cheese menu 1"]').click();

    //confirm the are you sure dialog opens
    cy.contains(
      'Are you sure you want to remove "Royale With Cheese" from your order?'
    );

    //click remove
    cy.contains("Remove").click();

    //confirm the empty cart text
    cy.contains("Cart Is Empty");

    //close the cart dialog
    cy.contains("Close").click();
  });

  it("should remove the item completely from the user's cart (executed within the cart dialog)", () => {
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

    //click the minus button
    cy.get('[data-testid="remove one Royale With Cheese cart 1"]').click();

    //confirm the are you sure dialog opens
    cy.contains(
      'Are you sure you want to remove "Royale With Cheese" from your order?'
    );

    //click remove
    cy.contains("Remove").click();

    //confirm the empty cart text
    cy.contains("Cart Is Empty");

    //close the cart dialog
    cy.contains("Close").click();
  });
});

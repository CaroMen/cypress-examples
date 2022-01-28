/// <reference types="cypress" />

describe("Home", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should click on 'Add'", () => {
    cy.get("[date-cy='habit-add']").click();
  });
});

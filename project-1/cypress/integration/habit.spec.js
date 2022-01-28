/// <reference types="cypress" />

describe("Home", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should click on 'Add'", () => {
    cy.get("[data-cy='habit-add']").click();
  });

  it("should get habit input", () => {
    cy.get("[data-cy='habit-input']").type("test");
  });

  // it("should get the add button", () => {

  // })
});

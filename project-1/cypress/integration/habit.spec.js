/// <reference types="cypress" />

describe("Home", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should click on 'Add'", () => {
    cy.get("[data-cy='habit-add']").click();
  });

  // it("should get habit input", () => {
  //   cy.get("input");
  // });

  // it("should get the save changes button", () => {
  //   cy.contains("Save Changes").click();
  // });
});

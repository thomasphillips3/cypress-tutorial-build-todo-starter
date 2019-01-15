describe("List items", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it("properly displays completed items", () => {
    cy.get(".todo-list li")
      .filter(".completed")
      .should("have.length", 1)
      .and("contain", "Get money")
      .find(".toggle")
      .should("be.checked");
  });

  it("shows remaining todos in the footer", () => {
    cy.get(".todo-count").should("contain", 3);
  });
});

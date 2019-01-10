const todos = [
  {
    id: 1,
    name: "F Bs",
    isComplete: false
  },
  {
    id: 2,
    name: "Get money",
    isComplete: false
  },
  {
    id: 3,
    name: "Stack Bread",
    isComplete: false
  },
  {
    id: 4,
    name: "Make donuts",
    isComplete: false
  }
];

describe("App initialization", () => {
  it.only("Loads todos on page load", () => {
    cy.server();
    cy.route('GET', '/api/todos', todos);
    cy.visit('/');

    cy.get('.todo-list li')
        .should('have.length', 4)
  });
});

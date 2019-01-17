describe('List items', () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it('properly displays completed items', () => {
    cy.get('.todo-list li')
      .filter('.completed')
      .should('have.length', 1)
      .and('contain', 'Get money')
      .find('.toggle')
      .should('be.checked');
  });

  it('shows remaining todos in the footer', () => {
    cy.get('.todo-count').should('contain', 3);
  });

  it('removes a todo', () => {
    cy.route({
      method: 'DELETE',
      url: '/api/todos/1',
      status: 200,
      response: {}
    });

    cy.get('.todo-list li').as('list');

    cy.get('@list')
      .first()
      .find('.destroy')
      .invoke('show')
      .click();

    cy.get('@list')
      .should('have.length', 3)
      .and('not.contain', 'Flex hard');
  });

  it('Marks an item as complete', () => {
    cy.fixture('todos').then(todos => {
      const target = Cypress._.head(todos);

      cy.route(
        'PUT',
        `/api/todos/${target.id}`,
        Cypress._.merge(target, { isComplete: true })
      );
    });

    cy.get('.todo-list li')
      .first()
      .as('first-item');

    cy.get('@first-item')
      .find('.toggle')
      .click()
      .should('be.checked');

    cy.get('@first-item')
      .should('have.class', 'completed');

    cy.get(".todo-count")
      .should("contain", 2);
  });
});

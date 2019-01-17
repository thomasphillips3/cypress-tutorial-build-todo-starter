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
      .and('not.contain', 'Flex hard')
  });
});

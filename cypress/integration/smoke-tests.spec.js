describe('Smoke tests', () => {
  beforeEach(() => {
    cy.request('GET', '/api/todos')
      .its('body')
      .each(todo => cy.request('DELETE', `/api/todos/${todo.id}`))
  });

  context('With no todos', () => {
    it('Saves new todos', () => {
      const items = [
        { text: 'Roll down the strip on vols', expectedLength: 1 },
        { text: 'Come up', expectedLength: 2 },
        { text: 'Slam Cadillac doors', expectedLength: 3 }
      ];

      cy.visit('/');
      cy.server()
      cy.route('POST', '/api/todos')
        .as('create')

      cy.wrap(items)
        .each(todo => {
          cy.focused()
            .type(todo.text)
            .type('{enter}')
          
          cy.wait('@create')
    
          cy.get('.todo-list li')
            .should('have.length', todo.expectedLength)
        });
    });
  });
});

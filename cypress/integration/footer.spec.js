describe('Footer', () => {
  context('with a single todo', () => {
    it('displays a singular todo in count', () => {
      cy.seedAndVisit([{ id: 1, name: 'Flex hard', isComplete: false }]);
      cy.get('.todo-count').should('contain', '1 todo left');
    });
  });

  context('with multiple todos', () => {
    beforeEach(() => {
      cy.seedAndVisit();
    });

    it('displays plural todos in count', () => {
      cy.get('.todo-count').should('contain', '3 todos left');
    });
  });
});

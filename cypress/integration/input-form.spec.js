describe('Input form', () => {
    it('focuses input on load', () => {
        cy.visit('http://localhost:3030');

        cy.focused().should('have.class', 'new-todo');
    });

    it('accepts input', () => {
        const testText = 'smack fools';
        cy.visit('http://localhost:3030');

        cy.get('.new-todo').type(testText).should('have.value', testText);
    });
});

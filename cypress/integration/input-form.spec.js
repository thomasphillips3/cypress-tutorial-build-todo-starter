describe('Input form', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('focuses input on load', () => {
        cy.focused()
            .should('have.class', 'new-todo');
    });

    it('accepts input', () => {
        const testText = 'smack fools';
        cy.get('.new-todo')
            .type(testText)
            .should('have.value', testText);
    });
});

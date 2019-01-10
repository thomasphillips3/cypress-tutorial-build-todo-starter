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

    context('Form submission', () => {
        it.only('Adds a new todo on submit', () => {
            const itemText = 'slap busters';
            cy.server();
            cy.route('POST', '/api/todos', {
                name: itemText,
                id: 1,
                isComplete: false
            });

            cy.get('.new-todo')
                .type(itemText)
                .type('{enter}')
                .should('have.value', '')
            
            cy.get('.todo-list li')
                .should('have.length', 1)
                .and('contain', itemText)
        });
    });
});

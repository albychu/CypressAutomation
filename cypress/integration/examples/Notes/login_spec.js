describe('/login', () => {
    //conduit website
    //best practice - to iterate on a single one at a time not group

    beforeEach(() => {
        cy.visit('/#/login')
    })

    it('greets with Sign In', () => {
        cy.contains('h1', 'Sign In')
    })

    it('links to #/register', () => {
        cy
            .contains('Need an account?')
            .should('have.attr', 'href', '#/register')
    })

    it('requires email', () => {
        cy.get('form').contains('Sign In').click()
        cy.get('.error-messages')
            .should('contain', 'email can\'t be blank')
    })

    it('requires password', () => {
        cy.get('[data-test=email]').type('joe@example.com{enter}') //similar to .click - 2 ways to do it

    })

    it('requires valid username and password', () => {
        cy.get('[data-test=email]').type('joe@example.com')
        cy.get('[data-test=password]').type('invalid{enter}')
        cy.get('.error-messages')
            .should('contain', 'email or password is invalid')
    })

    it('navigates to #/ on successful login', () => {
        cy.get('[data-test=pemail]').type('joe@example.com')
        cy.get('[data-test=password]').type('joe#{enter}')
        cy.hash().should('eq', '#/')
    })
})
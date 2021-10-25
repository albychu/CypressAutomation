describe('my Tests', function()
{ 
    it('second Test', function()
    {
        cy.visit('https://www.goldbelly.com')
        cy.get('.index-module__button___3okgK').click()
        cy.get('.index-module__container___V8zaE > :nth-child(2)').click()
        cy.get('.index-module__active___2IC8x > .btn-primary').click()
        cy.get('#email-address').type('albychup@gmail.com')
        cy.get('form > :nth-child(2) > :nth-child(2) > .btn').click()
        cy.get('#password').type('Qwer2324!')
        cy.get('.index-module__password___3avL_ > :nth-child(2) > :nth-child(2) > .btn').click()
    })
})
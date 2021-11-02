describe('/settings', () => {
    beforeEach(() => {
        //must log in first
        cy.login()
        //and then visit settings
        cy.visit('/#/settings')
    })
    it('greets with Your Settings', () => {
        cy.contains('h1', 'Your Settings')
    })
})


    /*  Don't duplicate code
    describe('/settings', () => {
    beforeEach(() => {
        cy.visit('/#/login')
        cy.get('[data-test=email]').type('joe@example.com')
        cy.get('[data-test=password]').type('joe{enter}')
        cy.hash().should('eq', '#/')
    
        cy,visit('/#/settings')
        })
    })
    */


/*
1. onFormSubmit 
2 Reads form values for email and password
3. POST / api/users/login to REQUEST URL for API server along with JSON payload body
4. Success: Save Token - send back a JSON response payload of the user
    application code extracts token out of payload and saves it to local storage
5. On load, check for token in local storage 
*/
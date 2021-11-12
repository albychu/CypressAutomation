

/* Practice Test
describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(false).to.equal(false)
    })
})



// Step 1: visit a page
describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
    })
})


// Step 2: query for an element
describe('My First Test', () => {
    it('finds the content "type"', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type')
    })
})


//Step 3: click an element    
describe('My First Test', () => {
    it('clicks the link "type"', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
    })
})
*/

//Step 4: make an assertion
describe('My First Test', () => {
    it('clicks the link "type" navigates to a new url', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        //should be on a new url which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        //get an input, type it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})

/*
1. Visit: the website
2. Find the element with content: type
3. Click on it
4. Get the URL
5. Assert it includes: /commands/actions
6. Get the input with the .action-email class
7. Type fake@email.com into the input
8. Assert the input reflects the new value


GIVEN, WHEN, THEN Syntax
1. Given a user visits the website
2. When they click the link labled type
3. And they type "fake@email.com" into the .action-email input
4. Then the URL should include /commands/actions
5. And the .action-email input has "fake@email.com" as its value
*/
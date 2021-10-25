/// <reference types=”Cypress”/>
//cypress and jquery commands work as well describe('My first Test Suite', function() {

it('My firstTest case', function () {
    //test step

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //fixture

    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    cy.get('.product').should('have.length', 5)
    cy.get('.product:visible').should('have.length', 4)

    //parent child chaining / this is to find one specific item
    cy.get('.products').as('productLocator')  //.as(variableName) to make variable and to use it , put @ instead of . 
    cy.get('@productLocator').find('.product').should('have.length', 4)
    cy.get(':nth-child(3) > .product-action > button').click()
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function ()
    //^selects second product and adds it to cart
    //cy.contains('ADD TO CART') will find all the ones that say 'ADD TO CART' button
    {
        console.log('sf')
    })

    // this is to find any item 
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        //$el.find('.product-name') to find anything in the element (but finding specifically the name)

        const textVeg = $el.find('h4.product-name').text()
        //made into variable
        if (textVeg.includes('Cashews')) {
            $el.find('button').click()
        }
    })
    //to check if text is displayed correctly
    cy.get('.brand').should('have.text', 'GREENKART')
    cy.get('.brand').then(function (logoElement) {
        cy.log(logoElement.text())
    })
})
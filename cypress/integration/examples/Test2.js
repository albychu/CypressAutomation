/// //cypress and jquery commands work as well describe('My second Test Suite', function() {

    it('My secondTest case', function()
    {
        //test step
        
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            //fixture
        
            cy.get('.search-keyword').type('ca')
            cy.wait(2000)
        
            //parent child chaining / this is to find one specific item
            cy.get('.products').as('productLocator')  //.as(variableName) to make variable and to use it , put @ instead of .
            cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            //$el.find('.product-name') to find anything in the element (but finding specifically the name)
            
                const textVeg=$el.find('h4.product-name').text() 
                //made into variable
                if(textVeg.includes('Cashews')) 
                {
                $el.find('button').click()
                }
            })
            cy.get('.cart-icon').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains('Place Order').click()
    })
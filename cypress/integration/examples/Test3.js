/// //cypress and jquery commands work as well describe('My second Test Suite', function() {

    it('My secondTest case', function()
    {
        //test step
        
            cy.visit("https://rahulshettyacademy.com/AutomationPractice")
            cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
            //"be" is for behavior and "have" for compaarison 
    })
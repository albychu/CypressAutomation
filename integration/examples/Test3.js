/// <reference types=”Cypress”/>

//cypress and jquery commands work as well describe('My second Test Suite', function() {

it('My secondTest case', function () {
    //test step
    //Check Boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    //"be" is for behavior and "have" for comparison 
    //instead of using multiple ‘should’, you can use ‘and’
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked’)
    cy.get('input[type =“checkbox”]’).check([‘option2’, ‘option3’])

    //Static Dropdown
    cy.get('select’).select(‘option2’).should(‘have.value’, ‘option2’)
    //select option and drop down ^   ^ compare and check whether the option is successfully selected or not

    //Dynamic Dropdown
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {

        if ($e1.text() === "India") {
            $e1.click()
        }

    })
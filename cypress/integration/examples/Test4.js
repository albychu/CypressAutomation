/// <reference types=”Cypress”/>

//cypress and jquery commands work as well describe('My second Test Suite', function() {

it('My fourthTest case', function () {

    //Check Boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    //cypress auto accepts the alerts and pop-ups
    //Firing event = window:alert 
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm', (str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
})


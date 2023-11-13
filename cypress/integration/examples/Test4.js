/// <reference types="Cypress" />
import 'cypress-iframe'

describe('Frames',function(){
    it('lets check frames now',function(){
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.frameLoaded('#courses-iframe')
        // cy.iframe().find("a[href*='mentorship']").eq(0).click()
        // cy.iframe().find("a[href*='mentorship']").should('have.length',2)

        cy.visit(Cypress.env('url'))
    })
})
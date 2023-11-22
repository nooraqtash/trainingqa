/// <reference types="Cypress" />

import { checkLogin } from "../pageObjects/checkLogin"


describe('Checking Login',() => {
    beforeEach (()=>{
        cy.visit(checkLogin.logInURL)
    })

    
    it('Successful Login',() => {

        //successful user check
        checkLogin.logIn(checkLogin.successCaseUser,checkLogin.correctPassword)

        // checking that user is redirected to the correct url
        cy.url().should('eq',checkLogin.inventoryURL)
    })
    it('Invalid Credentials',() => {
        

        checkLogin.logIn(checkLogin.invalidUser,checkLogin.invalidPassword)
        

         // checking that the error message is correct
        cy.get(checkLogin.errorMessage).contains('Username and password do not match any user in this service')
    })
    it('Locked out account',() => {
        

        checkLogin.logIn(checkLogin.lockedOutUser,checkLogin.correctPassword)
        

        // checking that the error message is correct
        cy.contains('[data-test="error"]', 'Sorry, this user has been locked out.')

    })
})


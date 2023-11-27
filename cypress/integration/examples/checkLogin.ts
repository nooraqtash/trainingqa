/// <reference types="Cypress" />

import { loginPage } from "../pageObjects/checkLogin"


describe('Checking Login',() => {
    beforeEach (()=>{cy.visit(loginPage.baseURL+loginPage.logInURL) })

    it('Successful Login',() => {

        //successful user check
        loginPage.logIn(loginPage.successCaseUser,loginPage.correctPassword)

        // checking that user is redirected to the correct url
        cy.url().should('eq',loginPage.baseURL+loginPage.inventoryURL)
    })

    it('Should not be able to login with invalid credentials',() => {
        
        loginPage.logIn(loginPage.invalidUser,loginPage.invalidPassword)
        
         // checking that the error message is correct
        cy.get(loginPage.errorMessage).contains('Username and password do not match any user in this service')
    })
    
    it('Should not be able to login with locked out account credentials ',() => {
        
        loginPage.logIn(loginPage.lockedOutUser,loginPage.correctPassword)
        
        // checking that the error message is correct
        cy.contains(loginPage.errorMessage, 'Sorry, this user has been locked out.')

    })
})


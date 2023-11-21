/// <reference types="Cypress" />

import { login } from "../pageObjects/checkLogin"


describe('Checking Login',() => {
    it('Successful Login',() => {
        
        cy.visit('https://www.saucedemo.com/v1/index.html')

        login.logInCredentials('standard_user','secret_sauce')
        cy.get('#login-button').click()

        // checking that user is redirected to the correct url
        cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')
    })
    it('Invalid Credentials',() => {
        cy.visit('https://saucedemo.com/')

        login.logInCredentials('error_user','wrong_password')
        cy.get('[data-test="login-button"]').click()

         // checking that the error message is correct
        cy.get('[data-test="error"]').contains('Username and password do not match any user in this service')
    })
    it('Locked account',() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')

        login.logInCredentials('locked_out_user','secret_sauce')
        login.getLogInButton().click()

        // checking that the error message is correct
        cy.contains('[data-test="error"]', 'Sorry, this user has been locked out.')

    })
})


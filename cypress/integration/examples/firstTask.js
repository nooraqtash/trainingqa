/// <reference types="Cypress" />

describe('FirstTask',function(){
    it('Successful Login',function(){
        cy.visit('https://www.saucedemo.com/v1/index.html')

        // login method is created in commands.js to avoid hardcoding
        cy.login('standard_user','secret_sauce')
        cy.get('#login-button').click()

        // checking that user is redirected to the correct url
        cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')
    })
    it('Invalid Credentials',function(){
        cy.visit('https://saucedemo.com/')

        cy.login('error_user','wrong_password')
        cy.get('[data-test="login-button"]').click()

  // checking that the error message is correct
        cy.get('[data-test="error"]').contains('Username and password do not match any user in this service')
    })
    it('Locked account',function(){
        cy.visit('https://www.saucedemo.com/v1/index.html')

        cy.login('locked_out_user','secret_sauce')
        cy.get('#login-button').click()

  // checking that the error message is correct
        cy.get('[data-test="error"]').contains('Sorry, this user has been locked out.')

    })
})


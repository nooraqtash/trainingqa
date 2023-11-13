/// <reference types="Cypress" />
import sauceDemo from '../pageObjects/sauceDemo'

describe('Second task',function(){
    before(() => {
        cy.fixture('example').then(function(data){
            //intializing global variable to become accessible everywhere
            this.data=data
        })
      })

    const saucedemo = new sauceDemo()
    it('Second task',function(){
        cy.visit('https://www.saucedemo.com/v1/inventory.html')

        //adding the first and last items
        saucedemo.getFirstItemButton().click()
        saucedemo.getLastItemButton().click()

        //going to shopping cart
        cy.get('#shopping_cart_container').click()
        //checking if the items added are correct
        saucedemo.correctItemCheck('#item_4_title_link > .inventory_item_name','Backpack')
        saucedemo.correctItemCheck('#item_3_title_link > .inventory_item_name','T-Shirt')

        //remove item from cart
        saucedemo.removeFirstItem().click()

        //checking that it is removed
        saucedemo.removeFirstItemCheck()

        //check out 
        cy.get('.btn_action').click()

        //Filling in the details
        saucedemo.fillInForm('[data-test="firstName"]',this.data.firstName)
        saucedemo.fillInForm('[data-test="lastName"]',this.data.lastName)
        saucedemo.fillInForm('[data-test="postalCode"]',this.data.zipCode)
        cy.get('.btn_primary').click()

        //checking the overview then moving to the next page
        cy.get('.subheader').should('include.text','Overview')
        cy.get('.btn_action').click()
        
        //Checking the successful message text
        cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')


    })
})
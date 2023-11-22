
/// <reference types="Cypress" />

import { saucedemo } from "../pageObjects/sauceDemo";


let data1

describe('shoppingTest', () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            //intializing global variable to become accessible everywhere since we are using data from example.json
            data1 = data;
        });
    });
    it('Testing the shopping procedure', () => {
        cy.visit(saucedemo.homepageURL);

        //adding the first and last items
        cy.get(saucedemo.firstItemButton).click()
        cy.get(saucedemo.lastItemButton).click()

        //going to shopping cart
        cy.get(saucedemo.shoppingCart).click();

        //checking if the items added are correct
        cy.get(saucedemo.firstItemInCart).should('include.text','Backpack')
        cy.get(saucedemo.lastItemInCart).should('include.text','T-Shirt')
        

        //remove item from cart
        cy.get(saucedemo.removeButtonforFirstItem).click()

        //checking that it is removed without adding it to the page object
        cy.get(saucedemo.firstItemInCart).should('not.exist')

        //check out 
        cy.get(saucedemo.checkOutButton).click();
        //Filling in the details

        cy.get(saucedemo.firstNameField).type(data1.firstName)
        cy.get(saucedemo.lastNameField).type(data1.lastName)
        cy.get(saucedemo.postCodeField).type(data1.zipCode)
        
        cy.get(saucedemo.submitFormButton).click();

        //checking the overview then moving to the next page
        cy.get(saucedemo.overview).should('include.text', 'Overview');
        cy.get(saucedemo.checkOutButton).click();
        
        //Checking the successful message text
        cy.get(saucedemo.header).should('have.text', 'THANK YOU FOR YOUR ORDER');
    });
});

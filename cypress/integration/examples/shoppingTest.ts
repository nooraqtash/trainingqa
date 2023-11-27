
/// <reference types="Cypress" />

import { saucedemoPage } from "../pageObjects/sauceDemo";

describe('shoppingTest', () => {
    let data1;
    before(()=> {
        cy.fixture('example').then(function (data) {
            //intializing global variable to become accessible everywhere since we are using data from example.json
            data1 = data;
        });
    });
    it('Testing the shopping procedure', () => {
        cy.visit(saucedemoPage.baseURL+saucedemoPage.homepageURL);

        //adding the first and last items
        cy.get(saucedemoPage.firstItemButton).click()
        cy.get(saucedemoPage.lastItemButton).click()

        //going to shopping cart
        cy.get(saucedemoPage.shoppingCart).click();

        //checking if the items added are correct
        cy.get(saucedemoPage.firstItemInCart).should('include.text','Backpack')
        cy.get(saucedemoPage.lastItemInCart).should('include.text','T-Shirt')
        

        //remove item from cart
        cy.get(saucedemoPage.removeButtonforFirstItem).click()

        //checking that it is removed without adding it to the page object
        cy.get(saucedemoPage.firstItemInCart).should('not.exist')

        //check out 
        cy.get(saucedemoPage.checkOutButton).click();
        //Filling in the details

        cy.get(saucedemoPage.firstNameField).type(data1.firstName)
        cy.get(saucedemoPage.lastNameField).type(data1.lastName)
        cy.get(saucedemoPage.postCodeField).type(data1.zipCode)
        
        cy.get(saucedemoPage.submitFormButton).click();

        //checking the overview then moving to the next page
        cy.get(saucedemoPage.overview).should('include.text', 'Overview');
        cy.get(saucedemoPage.checkOutButton).click();
        
        //Checking the successful message text
        cy.get(saucedemoPage.header).should('have.text', 'THANK YOU FOR YOUR ORDER');
    });
});

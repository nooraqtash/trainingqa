class sauceDemo{

    getFirstItemButton(){
        return cy.get(':nth-child(1) > .pricebar > .btn_primary')
    }

    getLastItemButton(){
       return cy.get('.inventory_item').last().find(".pricebar > .btn_primary")
    }

    correctItemCheck(element: string,text: string){
        return cy.get(element).should('include.text',text)
    }

    removeFirstItem(){
        return cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary')
    }

    removeFirstItemCheck(){
        return this.removeFirstItem().should('not.exist')
    }

    fillInForm(element,text){
        return cy.get(element).type(text)

    }
}
export const saucedemo: sauceDemo = new sauceDemo();
class HomePage{

    getEditBox(){
        return cy.get(':nth-child(1) > .form-control')
    }

    GetTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getGender(){
       
      return cy.get('#exampleFormControlSelect1')
    }
    getEnterprenuerRadioButton(){
        return cy.get('#inlineRadio3')
    }
    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}



//to make sure it's visible to all other files
export default HomePage
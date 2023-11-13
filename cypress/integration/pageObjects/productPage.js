class productPage{

    sumOfPrices(){
        return cy.get('tr td:nth-child(4) strong')
    }
    checkOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    checkOutAgain(){
        return cy.get('.btn.btn-success')
    }
    checkbox(){
        return cy.get('#checkbox2')
    }

    getCountry(){
        return cy.get('#country')
    }
    getCountrySuggestion(){
        return cy.get('.suggestions > ul > li > a')
    }

    getPurchaseButton(){
        return cy.get('input[type="submit"]')
    }
    getSuccessMsg(){
       return cy.get('.alert')
    }
}
export default productPage
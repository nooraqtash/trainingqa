/// <reference types="Cypress" />
import 'cypress-iframe'
import HomePage from '../pageObjects/homePage'
import productPage from '../pageObjects/productPage'


describe('Frameworks',function(){

    const productpage = new productPage()
    const homePage= new HomePage()

    before(() => {
        cy.fixture('example').then(function(data){
            //intializing global variable to become accessible everywhere
            this.data=data
        })
      })

    it('lets check frameworks on homepage',function(){

        //create object so we can use class
        

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        homePage.GetTwoWayDataBinding().should('have.value', this.data.firstName)
        cy.get(':nth-child(1) > .form-control').should('have.attr', "minlength", 2)
        homePage.getEnterprenuerRadioButton().should('be.disabled')

        homePage.getShopTab().click()

        cy.get('h4.card-title').each(($el, index, $list) => {
                if ($el.text().includes('Blackberry')) {
                  cy.get('button.btn.btn-info').eq(index).click()
                } 
              }) //> because we implemented it in the commands to avoid hardcoding

//from command.js to avoid repeating the same command
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')

        //simplifying it more by adding the array products in example it json
       
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });


        

        productpage.checkOutButton().click()

        var sum=0
        productpage.sumOfPrices().each(($el, index, $list) => {
                
            const actualText = $el.text()
            var onlyNum = actualText.split(' ')
            onlyNum = onlyNum[1].trim()
            sum = Number(sum)+ Number(onlyNum)
            
          }).then(function(){
            cy.log(sum)
          })
          var total= 0 
          cy.get('h3 > strong').then(function(element){
            const actualText = element.text()
            var onlyNum = actualText.split(' ')
            onlyNum = onlyNum[1].trim()

            expect(Number(onlyNum)).to.equal(sum)
          })

        productpage.checkOutAgain().click()
        productpage.getCountry().type('India')
        productpage.getCountrySuggestion().click()
        productpage.checkbox().click({force: true})
        productpage.getPurchaseButton().click()
        productpage.getSuccessMsg().then(function(element){
            const actual = element.text()
            expect(actual.includes('Success!')).to.be.true
        })
       
    })
    
})
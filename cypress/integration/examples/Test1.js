describe('My first test take 1', function(){
    it('first test case', function(){
        //test steps
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        //cy.get('.product:visible').should('have.length',4)
        //parent child chaining
        cy.get('.products').as('productsGroup')
        cy.get('@productsGroup').find('.product').should('have.length',4)
       // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click(); //this is hardcoded so not preffered
       // a more flexible way is below
        cy.get('@productsGroup').find('.product').each(($el, index, $list) => {
            const Veggie = $el.find('h4.product-name').text()
            if (Veggie.includes('Cashews')) {
              
              cy.wrap($el).find('button').click()
            } 
          })
          //if logo text is correct
          cy.get('.brand').should('have.text','GREENKART')

          // to print in logs
         cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
         })
         
    })
})
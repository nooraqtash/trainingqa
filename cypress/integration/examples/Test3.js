/// <reference types="Cypress" />
describe('beginner kind of tests',function(){
    it('third test case i ever do',function(){
        //testing checkboxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
       //multiple check boxes at a time
      // cy.get('input[type="checkbox').check(['option2','option3'])


       //dropdowns 2 types:dynamic and static
       //static first
      // cy.get('select').select('option2').should('have.value','option2')
    //dynamic
        // cy.get('#autocomplete').type('can')
        // cy.get('.ui-menu-item div').each(($el, index, $list) => {
        //     if ($el.text()== "Canada") {
              
        //       cy.wrap($el).click()
        //     } 
        //   })
        //   cy.get('#autocomplete').should('have.value','Canada')

//visibility of element check
        //   cy.get('#displayed-text').should('be.visible')
        //   cy.get('#hide-textbox').click()
        //   cy.get('#displayed-text').should('not.be.visible')
        //   cy.get('#show-textbox').click()
        //   cy.get('#displayed-text').should('be.visible')

         //pop up
        //  cy.get('#alertbtn').click()
         
        //  //to check something in a pop up window:alert
        //  cy.on('window:alert',(str)=>
        //  {
        //     expect(str).to.equal('Hello , share this practice page and share your knowledge')
        //  }
        //  )

        //  cy.get('#confirmbtn').click()
        //  cy.on('window:confirm',(str)=>
        //  {
        //     expect(str).to.equal('Hello , Are you sure you want to confirm?')
        //  }
        //  )

        //new tab test we remove the traget=_blank by the invoke command
        // cy.get('#opentab').invoke('removeAttr','target').click()
        // cy.origin('https://www.qaclickacademy.com/', ()=>{
        //     cy.get('#navbarSupportedContent a[href*="about"]').click();
        //     cy.get('.mt-50 h2').should('contain','QAClick Academy')
        // })

        // handling tables

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text= $el.text()
            if(text.includes("Python"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText= price.text()
                    expect(priceText).to.equal('25')
                })

            }
            })

            // mouse hovering handling
            cy.get('.mouse-hover-content').invoke('show')
            cy.contains('Top').click()
            cy.url().should('include','top')

            //only clicking on the button that is hidden
            cy.contains('Reload').click({force:true})
    })
})
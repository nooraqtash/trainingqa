class CheckLogIn{

  //path
  logInURL= 'https://www.saucedemo.com/v1/index.html ' 
  inventoryURL= 'https://www.saucedemo.com/v1/inventory.html'

    //variables
    username= '[data-test="username"]'
    password= '[data-test="password"]'
    logInButton= '#login-button'

    successCaseUser= 'standard_user'
    invalidUser= 'error_user'
    lockedOutUser = 'locked_out_user'

    correctPassword= 'secret_sauce'
    invalidPassword= 'wrong_password'
    

    errorMessage='[data-test="error"]'
    

     logIn(username, password)  { 
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.logInButton).click()
     }
    }
    export const checkLogin: CheckLogIn = new CheckLogIn();
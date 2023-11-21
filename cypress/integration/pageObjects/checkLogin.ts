class checkLogIn{
     logInCredentials(username, password)  { 
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
     }

     getLogInButton(){
       return cy.get('#login-button')
     }
    }
    export const login: checkLogIn = new checkLogIn();
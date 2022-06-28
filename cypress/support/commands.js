// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, password) => { 
    cy.get('#username').type(email);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
})

Cypress.Commands.add('LoginAPI',()=>{
    cy.request("POST",'https://rahulshettyacademy.com/api/ecom/auth/login',
    {"userEmail": "sntf033@gmail.com", "userPassword": "Lnaik@033"}).then(function(response){

        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token);
    })
})
Cypress.Commands.add('logout', () => { 
    cy.get('[data-test="sidenav-signout"] div:nth-child(2)').click();
})

Cypress.Commands.add('Logout',()=>{
    cy.contains('My Account').trigger('mouseover')
    cy.contains('Logout').click()

})

import 'cypress-iframe';
// or
require('cypress-iframe');
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';

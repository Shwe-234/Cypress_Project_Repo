/// <reference types="Cypress" />
describe("Test login functionality",()=>{
    it("Open URL",()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').clear();
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').clear();
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        /* ==== End Cypress Studio ==== */
    })
})

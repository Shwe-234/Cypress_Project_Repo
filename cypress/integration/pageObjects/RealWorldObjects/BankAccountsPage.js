class BankAccountsPage{
    getBankTab() {return cy.get("[href='/bankaccounts'] div:nth-child(2)");}
    getDeleteButton() {return cy.get("[data-test='bankaccount-delete']");}
    getCreateButton(){return cy.get("[data-test='bankaccount-new']");}
    getNextButton(){return cy.get('[data-test="user-onboarding-next"]');}
    getBankName(){return cy.get('#bankaccount-bankName-input');}
    getRoutingNumber(){return cy.get('#bankaccount-routingNumber-input');}
    getAccountNumber(){return cy.get('#bankaccount-accountNumber-input');}
    getBankInfoSave(){return cy.get('[data-test="bankaccount-submit"]');}
}
export default BankAccountsPage;

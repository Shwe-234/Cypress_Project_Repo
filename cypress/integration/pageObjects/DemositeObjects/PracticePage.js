class PracticePage {
    getDownload()
    {
        return cy.get('.nav-link').contains('Downloads')
    }
    getIRC()
    {
        return cy.get('[data-original-title="IRC"] > .text-white')
    }
    getMessage(){
        return  cy.get('h3')
    }
    getSuccessMessage()
    {
        return  cy.get('h1')
    }
//
   getAddToCart()
   {
       return cy.get(".card-body button:last-of-type")
   }
   getProductName()
   {
       return cy.get(".card-body b").eq(1)
       .eq(1)
   }
   getCart()
   {
       return  cy.get("[routerlink*='cart']")
   }
   getCheckOutButton(){
       return cy.contains("Checkout")
   }
   getCountryDropDown()
   {
     return cy.get("[placeholder*='Country']")
   }
   getCountryName()
   {
    cy.get('.ta-results > :nth-child(2) > .ng-star-inserted')
   }
   getSubmitButton(){
       return  cy.get(".action__submit")
   }
   getOrderSummary()
   {
       return cy.get(".order-summary button")
   }

}
export default PracticePage;
class DemoqaPage{
getAlertButton()
{
    return cy.get('#alertButton')
}
getConfirmationAlert(){
return cy.get('#confirmButton')
}
 getInteractionsMenu()
 {
     return cy.get(':nth-child(5) > :nth-child(1) > .card-body > h5')
 }
 getInteractionsTabItem()
 {
     return cy.get(':nth-child(5) > .element-list > .menu-list >')
 }
}
export default DemoqaPage;
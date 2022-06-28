import Demolocator from '../../pageObjects/DemositeObjects/DemoqaPage'
var demolocator = new Demolocator();

class DemoqaMethods {
    clickOnAlertButton()
    {
        demolocator.getAlertButton().trigger('mouseover').click()
    }
    verifyAlertMessage()
    {
        cy.on('window:alert',(str)=>
{
    
    expect(str).to.equal('You clicked a button')
})
    }
    clickOnConfirmationAlert()
    {
        demolocator.getConfirmationAlert().click()
    }
    verifyConfirmationAlertMessage()
    {
        cy.on('window:confirm',(str)=>
{
    
    expect(str).to.equal('Do you confirm action?')
})
    }
    handleUncaughtException()
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            return false
        })
    }
    clickOnInteractions()
    {
        demolocator.getInteractionsMenu().click()
    }
    verifyNumberOfInteractionsTabItem()
    {
      demolocator.getInteractionsTabItem().should('have.length',5)
    }
}
export default DemoqaMethods;
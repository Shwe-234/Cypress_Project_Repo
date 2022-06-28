import AccountLocators from '../../pageObjects/RealWorldObjects/AppPage';
var accountLocators = new AccountLocators();

class AppMethods{
    verifyErrorMessage(){
        accountLocators.getErrorMessage().should('be.visible').then(($msg)=>{
            const text =$msg.text()
            cy.log(text)
        })
    }
    clickOnNotification()
        {
            accountLocators.getNotification().click()
        }
        clickOnNewBTN()
        {
            accountLocators.getNewButton().click()
        }
        selectAccount()
        {
            accountLocators.getAccount().click()
        }
        enterAmount( amount)
        {
            accountLocators.getAmountField().type(amount)
            //accountLocators.getNoteField().type('test')
        }
        enterNote(note)
    
        {
            accountLocators.getNoteField().type(note)
        }
        clickOnPay()
        {
            accountLocators.getPayButton().click()
        }
        
       
        verifyNewTransactionTabisDisplayed()
        {
            accountLocators.getNewTranactionBTN().should('be.visible')
        }

        NavigateAccountSection() {
            accountLocators.getMyAccountTab().click();
        }
    
        UpdateAccountInformation(firstName, lastName, email, phoneNumber) {
            accountLocators.getFirstName().clear().type(firstName);
            accountLocators.getLastName().clear().type(lastName);
            accountLocators.getEmail().clear().type(email);
            accountLocators.getPhoneNumber().clear().type(phoneNumber);
            accountLocators.getSaveButton().click();
        }
    
        VerifyHomePageDisplayed() {
            accountLocators.getHomePageTab().should('be.visible');
        }
    
        VerifyAccountPageDisplayed() {
            accountLocators.getFirstName().should('not.be.visible');
        }
        
        
    }
    export default AppMethods;

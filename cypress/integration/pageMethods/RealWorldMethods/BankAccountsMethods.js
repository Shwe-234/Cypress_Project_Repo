import BankAccountLocators from '../../pageObjects/RealWorldObjects/BankAccountsPage'
var bankAccountLocators = new BankAccountLocators();

class BankAccountsMethods {

    NavigateBankAccountSection() {
        bankAccountLocators.getBankTab().click();
    }

    // UpdateBankAccountInformation(bankName, routingNumber, accountNumber) {
    //     bankAccountLocators.getNextButton().click();
    //     //bankAccountLocators.getDeleteButton().click();
    //     //bankAccountLocators.getCreateButton().click();
    //     bankAccountLocators.getBankName().clear().type(bankName);
    //     bankAccountLocators.getRoutingNumber().clear().type(routingNumber);
    //     bankAccountLocators.getAccountNumber().clear().type(accountNumber);
    //     bankAccountLocators.getBankInfoSave().click();
    //     bankAccountLocators.getNextButton().click();
    // }
    UpdateBankAccountInformation(bankName,routingNumber,accountNumber){
        bankAccountLocators.getBankName().type(bankName)
        bankAccountLocators.getRoutingNumber().type(routingNumber)
        bankAccountLocators.getAccountNumber().type(accountNumber)
        bankAccountLocators.getBankInfoSave().click()
    }

    VerifyBankAccountPageDisplayed() {
        bankAccountLocators.getNextButton().should('be.visible');
    }
}
export default BankAccountsMethods;
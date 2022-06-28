class AppPage {
  getMyAccountTab() {
    return cy.get("[href='/user/settings'] div:nth-child(2)");
  }
  getFirstName() {
    return cy.get("#user-settings-firstName-input");
  }
  getLastName() {
    return cy.get("#user-settings-lastName-input");
  }
  getEmail() {
    return cy.get("#user-settings-email-input");
  }
  getPhoneNumber() {
    return cy.get("#user-settings-phoneNumber-input");
  }
  getSaveButton() {
    return cy.get('[data-test="user-settings-submit"]');
  }
  getHomePageTab() {
    return cy.get(
      '[data-test="na                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          v-public-tab"]'
    );
  }
  getNotification() {
    return cy.get(
      '[data-test="sidenav-notifications"] > .MuiListItemText-root > .MuiTypography-root'
    );
  }
  // getNewTab(){return }
  getNewButton() {
    return cy.get(".MuiButton-label");
  }
  getAccount() {
    return cy.contains("Edgar Johns");
  }
  getAmountField() {
    return cy.get("#amount");
  }
  getNoteField() {
    return cy.get("#transaction-create-description-input");
  }
  getPayButton() {
    return cy.get(
      '[data-test="transaction-create-submit-payment"] > .MuiButton-label'
    );
  }
  getNewTranactionTab() {
    return cy.get(
      '[data-test="transaction-create-submit-payment"] > .MuiButton-label'
    );
  }
  getErrorMessage() {
    return cy
      .get(".MuiAlert-message")
      .contains("Username or password is invalid");
  }
  getLogo()
  {
    return cy.get('.makeStyles-logo-26 ')
  }
  getMineTab()
  {
    return  cy.get('[data-test="nav-personal-tab"] > .MuiTab-wrapper')
  }
  getNoTransactionMsg()
  {
    return cy.get('[data-test="empty-list-header"] > .MuiTypography-root')
  }
  getBalance(){
    return cy.get('[data-test="sidenav-user-balance"]')
  }

  getGoogleAppsButton() {
    return cy.get(".gb_Se");
  }
  //
  getUsername() {
    return cy.get("#username");
  }
  getPassword() {
    return cy.get("#password");
  }
  getSignInButton() {
    return cy.get(".MuiButton-label").contains("Sign In");
  }
  getNotificationCount() {
    return cy.get(
      '[data-test="nav-top-notifications-count"] > .MuiSvgIcon-root > path'
    );
  }
  
}
export default AppPage;

import PageLocators from '../../pageObjects/DemositeObjects/PracticePage'
import neatCSV from "neat-csv";

var pagelocator = new PageLocators();

class PracticeMethods {
    clickOnDownload()
    {
        pagelocator.getDownload().click()
    }
    clickOnIrc()
    {
        pagelocator.getIRC().invoke('removeAttr','target').click();
    }
    verifyMessage()
        {
            pagelocator.getMessage().should('contain',"You are not logged in and cannot access this page")
        }
    verifySuccessMessage()
    {
        pagelocator.getSuccessMessage().should('contain',"Welcome to the Dashboard")
    }
    addProductToCart()
    {
        pagelocator.getAddToCart().eq(1).click()
    }
    ProductName(){
        pagelocator.getProductName().then(function (ele) {
            productName = ele.text();
          });
    }
    clickOnCartAndCheckOut()
    {
        pagelocator.getCart().click()
        pagelocator.getCheckOutButton().click()
    }
      selectCountry()
      {
          pagelocator.getCountryDropDown().type('ind')
          pagelocator.getCountryName().click()
          pagelocator.getSubmitButton().click()
      }
      clickOnOrderSummary()
      {
          pagelocator.getOrderSummary().click()
      }
      downloadOrderSummary()
      {
        cy.readFile(
            Cypress.config("fileServerFolder") +
              "/cypress/downloads/order-invoice_sntf033.csv"
          )
          .then(async (text) => {
            const csv = await neatCSV(text);
      
            console.log(csv);
      
            const actualProductCSV = csv[0]["Product Name"];
      
            expect(productName).to.equal(actualProductCSV);
          });
      }


}
export default PracticeMethods;
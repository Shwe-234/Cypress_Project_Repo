import Locators from '../../pageObjects/FlipkartObjects/FlipkartPage'
var locators = new Locators();

class FlipkartMethods {
  clikOnLoginPopup() {
    locators.getLoginPopup().click()
    
  }
  enterUserName() {
    locators.getUsername()
  }
  enterPassword() {
    locators.getPassword()
  }
  clickOnLoginBTN() {
    locators.getLoginButton().click();
  }
  verifyPage() {
    cy.title().should(
      "include",
      "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!"
    );
  }

  serachProduct() {
    locators.getSearchBox().type('mobile{enter}');
  }
  closeLoginWindow() {
    locators.getCloseBTN().click();
  }
  clickOnCart() {
    locators.getCartTab().click();
  }
  verifyCartPage() {
    cy.title().should(
      "include",
      "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!"
    );
  }
  clickonMoreTab() {
    locators.getMoreTab().trigger("mouseover");
    locators.getsellOnFlipkart().click();
  }
  verifySellOnFlipkartPage() {
    cy.title().should(
      "include",
      "Sell Online on Flipkart | Grow your business with the leader in Indian e-commerce"
    );
  }
    mouseOverToMore()
    {
      locators.getMoreTab().trigger("mouseover")
      locators.getAdevertise().click()
    }
    enterEmailInTextField()
    {
      locators.getEmail()
     
    }
    enterPasswordInTextField()
    {
      locators.getPasswordForAdvertise()
    }
    clickOnLogin()
    {
      locators.getLogin().click()
    }
    //addToCart
    testMobileTab()
    {
      locators.getMobileTab().click()
      locators.getShopNow().click()
      locators.getCheckProduct().click()
      locators.getAddToCompare().click()
     
    }
    addProductBrand()
    {
      cy.get(':nth-child(1) > .RguR9P > :nth-child(2) > ._1EDlbo').type('BLU')
          cy.get('._1z5ndO').each(($e1, index, $list) => {
      
               if($e1.text()==="BLU")
             {
                  cy.wrap($e1).click()
              }
    })
  }
  chooseAProduct()
  {
    cy.get(':nth-child(1) > .RguR9P > :nth-child(3) > ._1EDlbo').click()
        cy.contains('BSNL Champion SQ 241').click()
  }

//advertise
advertiseTest()
{
  locators.getAdvertiseTab().click()
  locators.getFlipkartAdvertising().click()
}
verifyFlipkartAdvertisePage()
{
  cy.title().should('include', 'Flipkart Brand Health, Brand Pulse, Flipkart Insights, Flipkart Advertising, Commerce Advertising Platform');
}
 testPrevAndNext()
 {
   locators.getPrev().click()
   locators.getNext().click()
 }
 testAutoSuggestion()
 {
   locators.getSearch().click()
   cy.get('.Y5N33s').should('have.length',8).each(($li, index, $lis) => {
    // return cy.log($lis)
   // return cy.log(index)
   return cy.log($li.text())
   })
 }
 //product
 searchAProduct()
 {
  locators.getSearchBar()
 }
   testProductPriceText()
   {
     
     locators.getProduct()
     locators.getPriceLowToHigh().click()
     locators.getPriceText().click()
   }
   //seller
   testFlipkartSellerFeature()
   {
     locators.getMore()
     locators.getBecomeASeller().click()
     locators.getExistingSeller().click()
     locators.getUserNameTextField()
     locators.getNextBTN().click()
   }
   //dropdown
   clickOnTravel()
   {
     locators.getTravel().click()
   }
   selectFromLocation()
   {
     locators.getFrom().type("BOM");
     locators.getDepartureLocation().each(($e1, index, $list) => {
      if ($e1.text() === "BOM") {
        cy.wrap($e1).click();
   }
  })
}
  
   selectToLocation(){
     locators.getTo().type("BKK")
locators.getArrivalLocation().each(($e1, index, $list) => {
  if ($e1.text() === "BKK") {
    cy.wrap($e1).click();
  }
})
   }
   selectDepartureDate()
   {
     locators.getDepartureDate().click()
     locators.getDate().click()
   }
   selectReturnOnDate()
   {
     locators.getReturnDate().click()
     locators.getReturnOnDate().click()
   }
   clickOnSearch()
   {
     locators.getFlightSearch().click()
   }
   verifyTravelPage()
   {
    cy.title().should("include","Flight Booking | Book Flight Tickets at Lowest Airfare on Flipkart.com")

   }
   veriyErrorMessage()
   {
     locators.getErrorMessage().should('be.visible')
   }
   clickOnCareersLink()
   {
    locators.getCareerLink().click()
   }
   verifySellerPage()
   {
    cy.contains("The account does not exist, please enter valid account details").should("be.visible");
   }
   printAllShoppingSectionList()
   {
    
    
    cy.get('.xtXmba').as('Flipkart Shopping Section')
    cy.get('@Flipkart Shopping Section').should('have.length',9).each(($li, index, $lis) => {
      // return cy.log($lis)
     // return cy.log(index)
     return cy.log($li.text())
     })
    }
     printLoginText()
     {
       locators.getLoginText()
       .then(($el)=>{
                 var text=$el.text()
                 console.log(text)
     }
       )
   }
   verifyNumberOfProductDisplayed(){
     locators.getNumberOfProduct().should('have.length',40)
   }
 
 
}
export default FlipkartMethods;

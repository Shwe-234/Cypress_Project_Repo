class FlipkartPage {
    getLoginPopup() {
      return cy.get("._1_3w1N");
    }
    getUsername() {
      return cy.get(":nth-child(1) > ._2IX_2-");
    }
    getPassword() {
      return cy.get(":nth-child(2) > ._2IX_2-");
    }
    
    getLoginButton() {
      return cy.get("._1D1L_j > ._2KpZ6l");
    }
    getSearchBox() {
      return cy.get('input[name="q"]');
    }
    getCloseBTN() {
      return cy.get("._2doB4z");
    }
    getCartTab() {
      return cy.get("._3SkBxJ");
    }
    getCartPage() {
      return cy.get("._1LCJ1U");
    }
    getMoreTab() {
      return cy.contains("More");
    }
    getsellOnFlipkart() {
      return cy.contains("Sell on Flipkart");
    }
    getAdevertise()
    {
     return  cy.contains("Advertise")
    }
    getEmail()
    {
      return cy.get('input[type="text"]')
    }
    getPasswordForAdvertise()
    {
      return cy.get('input[type="password"]')
    }
    getLogin()
    {
      return cy.get('.styles__DefaultButton-sc-5941cr-1 > .styles__TextContainer-sc-5941cr-0')
       //return cy.get('.styles__TextContainer-sc-5941cr-0 cCBwan').contains('Login')
       // cy.get('button[type="submit"]')
    }
    // addcart
    getMobileTab()
    {
      return cy.contains('Mobiles')
    }
    getShopNow()
    {
      return cy.get('._1aqDWQ').contains('Shop Now')
    }
    getCheckProduct()
    {
      return cy.get('._6Up2sF').eq(0)
    }
    getAddToCompare()
    {
      return cy.get('._3hShhO')
    }
    getBrand()
    {
      return  cy.get(':nth-child(1) > .RguR9P > :nth-child(2) > ._1EDlbo').type('BSN')
    }
    //advertise feature test
    getAdvertiseTab()
    {
      return  cy.contains('Advertise')
    }
    getFlipkartAdvertising()
    {
      return  cy.contains('Flipkart Advertising')
    }
  
  getPrev()
  {
  return cy.get('.owl-prev > .fa')
  }
  getNext()
  {
    return cy.get('.owl-next > .fa')
  }
  getSearch()
  {
    return  cy.get('input[name="q"]')
  }
  //productTest
  getSearchBar()
  {
    return  cy.get('input[name="q"]')
    //.type('one plus{enter}')
  }
  getProduct()
  {
    return cy.get('._4rR01T').should('have.length',40)
    
  }
   getPriceLowToHigh()
   {
     return cy.contains('Price -- Low to High')
   }
   getPriceText()
   {
     return  cy.contains('OnePlus Y1 80 cm (32 inch) HD Ready LED Smart Android TV')
   }
   //seller
   getMore()
   {
     return cy.contains("More").trigger("mouseover")
   }
   getBecomeASeller()
   {
     return cy.contains('Become a Seller')
   }
   getExistingSeller()
   {
     return cy.contains('Login for existing sellers')
   }
   getUserNameTextField()
   {
     return cy.get('input[name="username"]').type('asdfghj')
   }
   getNextBTN()
   {
     return  cy.contains('Next')
   }
   //dropown
   getTravel(){
     return  cy.contains("Travel")
   }
   getFrom()
   {
     return cy.get('input[name="0-departcity"]')
   } 
   getTo()
   {
     return cy.get('input[name="0-arrivalcity"]')
   }
   getDepartureLocation()
   {
     return  cy.get("div._2B0KQx:visible")
   }
   getArrivalLocation()
   {
     return  cy.get("div._2B0KQx:visible")
   }
   getDepartureDate()
   {
     return  cy.get('input[name="0-datefrom"]')
   }
   getReturnDate()
   {
     return  cy.get('input[name="0-dateto"]')
   }
   getDate()
   {
     return cy.get('.jkj0H4').contains('29')
   }
    getReturnOnDate()
    {
      return cy.get(':nth-child(2) > tbody > :nth-child(3) > :nth-child(6) > :nth-child(1) > .jkj0H4')
    }
    getFlightSearch()
    {
      return cy.contains('SEARCH')
    }
    getErrorMessage()
    {
      return cy.get('._2YULOR').contains('Please enter valid Email ID/Mobile number')
    }
    getCareerLink()
    {
     return cy.get('._1arVWX').contains('Careers')
    }
    getShoppingSection()
    {
       return cy.get('.xtXmba')
    }
    getLoginText()
    {
       return cy.get('._1-pxlW > span')
    }
    getSearchProduct(){
      return  cy.get('._3704LK:visible')
    }
    getNumberOfProduct()
    {
      return cy.get('.MIXNux')
    }
  }
  export default FlipkartPage;
  
/// <reference types="Cypress" />
const data=require("../../fixtures/mobiledevice.json")
describe("Mobile responsive testing using cypress",()=>{
  beforeEach(()=>{
    cy.visit("https://www.flipkart.com/")
  });
  for (let mobileDeviceValue in  data.mobiledevicesname){

  
    it("viewing application in different devices with cypress viewport ",()=>{
      
       cy.viewport(data.mobiledevicesname[mobileDeviceValue])
    })
}
})
5
/// <reference types="cypress" />
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../pages/sauceLoginPage'
const loginPage = new LoginPage()

// Given('user is on SwagLab Login page', function ()  {
//     cy.visit('https://www.saucedemo.com/')
// });

// When('user enter valid username password and click on Login button', function () {
//     //cy.get('#user-name').type('standard_user')
//     //cy.get('#password').type('secret_sauce')
//     //cy.get('#login-button').click()
//     loginPage.enterUsername('standard_user')
//     loginPage.enterPassword('secret_sauce')
//     loginPage.clickonLogintButton()
// });

// Then('user redirected to home page', function ()  {
//     cy.get('.product_label').should('be.visible')
// });

When('user click on AddToCart button', function (){
    cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click()
});

Then('verify button text changed to Remove', function (){
    cy.get('.btn_secondary').should('have.text', 'REMOVE')
});

When('user click on Cart icon', function (){
    cy.get('.svg-inline--fa').click()
});

Then('verify user redirected to Your Cart page', function (){
    cy.get('.subheader').should('have.text','Your Cart')
});

When('user click on Checkout button', function (){
    cy.get('.btn_action').click()
});

Then('user redirected to Checkout: Your Information page', function (){
    cy.get('.subheader').should('have.text','Checkout: Your Information')
});

When('user enter Information and click on Continue button', function (){
    cy.get('#first-name').type('Jigar')
    cy.get('#last-name').type('Soni')
    cy.get('#postal-code').type('123456')
    cy.get('.btn_primary').click()
});

Then('user redirected to Checkout: Overview page', function (){
    cy.get('.subheader').should('have.text','Checkout: Overview')
});

When('user click on Finish button', function (){
    cy.get('.btn_action').click()
});

Then('user redirected to Finish page and Thankyou message', function (){
    cy.get('.subheader').should('have.text','Finish')
});
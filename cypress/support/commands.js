// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitPage', (nav, urlToGo, urlToBack, isMobile) => {
  cy.get(nav).find(`a[href*="/${urlToGo}"]`).click({ multiple: true })
  cy.url().should('include', `/${urlToGo}`)
  cy.visit(`/${urlToBack}`)
})

Cypress.Commands.add('errorFieldShow', (input, errorContainer, text) => {
  cy.get(input).type(text, { force: true })
  cy.get(errorContainer).should('be.visible')

})

Cypress.Commands.add('validateSelectFormSaving', () => {
  //! The error for department input is Visible
  cy.get('.react-datalist-input__textbox').eq(0).type('.01', { force: true })
  cy.get('[data-cy="error-department"]').should('be.visible')

  //! Clean the department input, and select a valid option
  cy.get('.react-datalist-input__textbox').eq(0).clear().click()
  cy.get('.react-datalist-input__listbox').eq(0).should('be.visible').contains('Bolívar').click()

  //! The error for municipality input is visible
  cy.get('.react-datalist-input__textbox').eq(1).type('.ba', { force: true })
  cy.get('[data-cy="error-municipality"]').should('be.visible')

  //! Clean the municipality input, and then select a valid option
  cy.get('.react-datalist-input__textbox').eq(1).clear().click()
  cy.get('.react-datalist-input__listbox').eq(0).should('be.visible').contains('Achí').click()

  //! Clean the department input and select the option Bogota to display the select localities
  cy.get('.react-datalist-input__textbox').eq(0).clear({ force: true }).click()
  cy.get('.react-datalist-input__listbox').eq(0).should('be.visible').contains('Bogotá D.C.').click()

  //! The error for the locality input is visible
  cy.get('.react-datalist-input__textbox').eq(1).type('.ba', { force: true })
  cy.get('[data-cy="error-locality"]').should('be.visible')
})
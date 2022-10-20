import "cypress-real-events/support"

describe('Saving Form SEOS', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/ahorro')
  })

  it('Saving page can be opened', () => {
    cy.contains('Escoge la solución que se ajusta a tu necesidad actual')
  })

  /* it('Hover card and see more information', () => {

    cy.get('.card').each(($card) => {

      cy.wrap($card).find('.div_info').invoke('show').should('be.visible')

    })
  }) */

  it('Saving form is show', () => {
    cy.get('.card').each(($card) => {
      cy.wrap($card).click({ multiple: true })
      cy.contains('aqui.').click()
    })
  })

  it('The error messages display correctly when a client choose saving with solar panel', () => {

    cy.get('.card').eq(0).then($card => {
      cy.wrap($card).click({ multiple: true })

      //! The error for the invoice_value input is visible
      cy.errorFieldShow('[data-cy="input-invoice_value"]', '[data-cy="error-invoice_value"]', '5d0')

      //! The error for the stratum input is visible
      cy.errorFieldShow('[data-cy="input-stratum"]', '[data-cy="error-stratum"]', '.01')

      //! Validate the selects
      cy.validateSelectFormSaving()

    })
  })

  it('The error messages display correctly when a client choose saving with system support', () => {

    cy.get('.card').eq(1).then($card => {

      cy.wrap($card).click({ multiple: true })

      //! The error for the invoice_value input is visible
      cy.errorFieldShow('[data-cy="input-invoice_value"]', '[data-cy="error-invoice_value"]', '5d0')

      //! The error for the stratum input is visible
      cy.errorFieldShow('[data-cy="input-stratum"]', '[data-cy="error-stratum"]', '.01')

      //! The error for the hours without electricity input is visible
      cy.errorFieldShow('[data-cy="input-hours_without_electricity"]', '[data-cy="error-hours_without_electricity"]', '5250')

      //! Validate the selects
      cy.validateSelectFormSaving()
    })
  })

  it('The error messages display correctly when a client choose saving with system support and solar panel', () => {

    cy.get('.card').eq(2).then($card => {

      cy.wrap($card).click({ multiple: true })

      //! The error for the invoice_value input is visible
      cy.errorFieldShow('[data-cy="input-invoice_value"]', '[data-cy="error-invoice_value"]', '5d0')

      //! The error for the stratum input is visible
      cy.errorFieldShow('[data-cy="input-stratum"]', '[data-cy="error-stratum"]', '.01')

      //! The error for the hours without electricity input is visible
      cy.errorFieldShow('[data-cy="input-hours_without_electricity"]', '[data-cy="error-hours_without_electricity"]', '5250')

      //! Validate the selects
      cy.validateSelectFormSaving()
    })
  })


})
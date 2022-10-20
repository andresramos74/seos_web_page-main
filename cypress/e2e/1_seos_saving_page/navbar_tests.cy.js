describe('Test the navbar in different viewports', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/ahorro')
  })

  it('The menu open and close in the smartphone viewport', () => {
    cy.viewport(414, 896)
    cy.get('[data-cy-button-hamburger="open"]').click({ multiple: true })
    cy.get('[data-cy-button-hamburger="close"]').should('be.visible').click({ multiple: true })
  })

  it('The menu leads to the different pages in mobile devices', () => {
    cy.viewport(414, 896)
    cy.get('[data-cy-button-hamburger="open"]').click({ multiple: true })
    cy.visitPage('[data-cy-menu-other="nav-other-devices"]','inicio','ahorro')

    cy.get('[data-cy-button-hamburger="open"]').click({ multiple: true })
    cy.visitPage('[data-cy-menu-other="nav-other-devices"]','nosotros','ahorro')

    cy.get('[data-cy-button-hamburger="open"]').click({ multiple: true })
    cy.visitPage('[data-cy-menu-other="nav-other-devices"]','soluciones','ahorro')
    
    cy.get('[data-cy-button-hamburger="open"]').click({ multiple: true })
    cy.visitPage('[data-cy-menu-other="nav-other-devices"]','blog','ahorro')
  })

  /* it('The menu has the corrects href attributes in pc viewport', () => {
    cy.viewport(1280,800)
    cy.validateMenu('[data-cy-menu-pc="nav-pc"]', ['', '', '', ''])
  }) */

})
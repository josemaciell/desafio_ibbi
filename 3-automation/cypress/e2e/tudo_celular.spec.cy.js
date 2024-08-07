/// <reference types="Cypress" />
// before(() => {
//   // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
//   cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
// })
describe('Compare - TudoCelular.com', function() {
  beforeEach(function(){
    cy.viewport('macbook-15')
    cy.visit('www.tudocelular.com/compare/')
  })
  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Compare - TudoCelular.com')
  })
  it('comparar dois celulares', function() {
    cy.get('#sb1_text').type('s23 ultra', { delay: 0})
    cy.get('#phone8346 > a').click()
    cy.get('#sb1_text').type('s23 FE')
    cy.get('#phone8870 > a').click()
    cy.get('#comparabtn > a').click()
    cy.get('.label-bc').should('be.visible')
  })
  it('Verificar se os celulares buscados são os do resultado', function() {
    cy.get('#sb1_text').type('s23 ultra', { delay: 0})
    cy.get('#phone8346 > a').click()
    cy.get('#sb1_text').type('s23 FE')
    cy.get('#phone8870 > a').click()
    cy.get('#comparabtn > a').click()
    cy.contains('Samsung Galaxy S23 Ultra').should('be.visible')
    cy.contains('Samsung Galaxy S23 FE').should('be.visible')
  })
})

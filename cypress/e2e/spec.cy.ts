describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('equal', 'VidChat')
  })

  it('Visits the message chat', () => {

    cy.visit('/chat/message')
  })
})

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('equal', 'VidChat')
  })

  it('Visits the message chat', () => {
    cy.visit('/chat/message')
    cy.get('.message').type("This is a bot message")
    cy.get('.username').type('Test Bot')
    cy.get('.submit').click()
  })
})

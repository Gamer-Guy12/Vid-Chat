describe('Testing mounts', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
  })

  it('visits the chat', () => {
    cy.visit('/chat/message')
  })

  it('visits signin', () => {
    cy.visit('/auth')
  })
})

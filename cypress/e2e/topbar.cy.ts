describe('', () => {
  it('navigates to chat', () => {
    cy.visit('/')
    cy.get("#chat").click().url().should("equal", "/chat/message")
  })
})

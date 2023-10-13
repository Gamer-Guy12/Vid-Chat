describe("Testing chat", () => {
  beforeEach(() => {
    cy.visit('/chat/message')
  })

  it('should send a message', () => {
    cy.get("#username").clear().type('Test Bot')
    cy.get("#message").clear().type("This a message from the test bot")
    cy.get("#submit").click()
  })

})

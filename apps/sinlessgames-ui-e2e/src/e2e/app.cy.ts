// apps/sinlessgames-ui-e2e/src/e2e/app.cy.ts

describe("SinLess Games Homepage", () => {
  beforeEach(() => {
    cy.visit("/") // Assuming your homepage is at the root URL
  })

  it("should display the welcome message", () => {
    cy.contains("Welcome to SinLess Games!").should("be.visible")
  })

  it("should display the introduction description", () => {
    cy.contains("SinLess Games is a game development studio").should(
      "be.visible"
    )
    cy.contains("Create worlds. Defy limits.").should("be.visible")
  })

  it("should load Vercel analytics and performance telemetry", () => {
    cy.get('script[src="/_vercel/insights/script.js"]').should("exist")
    cy.get('script[src="/_vercel/speed-insights/script.js"]').should("exist")
  })

  it("should keep the instrumented API route healthy", () => {
    cy.request("/api/hello").its("body").should("equal", "Hello, from API!")
  })
})

// apps/sinlessgames-ui-e2e/src/e2e/app.cy.ts

describe("SinLess Games Homepage", () => {
  beforeEach(() => {
    cy.visit("/") // Assuming your homepage is at the root URL
  })

  it("should display the welcome message", () => {
    cy.contains("Welcome to SinLess Games!").should("be.visible")
  })

  it("should display the introduction description", () => {
    cy.contains(
      "SinLess Games is a game development studio that creates highly immersive games with well-thought-out storylines and great graphics. Founded in February 2018 by Timothy A. Pierce, SinLess Games strives to change the gaming industry's focus from profit to immersive experiences. They offer services, including game design, development, testing, hosting, modding, and custom gaming PC builds. SinLess Games also runs a Minecraft server called Mobius Infernium, offering a unique and immersive gameplay experience. Join them on a journey where game immersion ranks supreme and dreams come true!!!"
    ).should("be.visible")
  })

  it("should load Vercel analytics and performance telemetry", () => {
    cy.get('script[src="/_vercel/insights/script.js"]').should("exist")
    cy.get('script[src="/_vercel/speed-insights/script.js"]').should("exist")
  })

  it("should keep the instrumented API route healthy", () => {
    cy.request("/api/hello").its("body").should("equal", "Hello, from API!")
  })
})

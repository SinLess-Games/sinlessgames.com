import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Contact from "../src/app/Contact/page"

describe("About Us Page", () => {
  it("renders the title", () => {
    const { getByText } = render(<Contact />)
    expect(getByText("Contact Us")).toBeInTheDocument()
  })

  it("renders the story section", () => {
    const { container } = render(<Contact />)

    expect(screen.getByText("Welcome to Our Community!")).toBeInTheDocument()
    expect(container).toHaveTextContent(
      "We're incredibly excited to welcome you into our SinLess Games family!"
    )
    expect(container).toHaveTextContent(
      "And if you're here to enjoy our games, we're glad to have you!"
    )
    expect(container).toHaveTextContent(
      "Once again, welcome—we can't wait to embark on this journey together!"
    )
  })

  it("renders the email card", () => {
    render(<Contact />)
    expect(screen.getByRole("heading", { name: "Email" })).toBeInTheDocument()
    expect(
      screen.getByText(
        "We love to hear from our Fans and Are always looking to help. We will try to respond to all emails within 24 hours. Please be patient with us wait time may vary You can contact us by email."
      )
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Email Us" })).toHaveAttribute(
      "href",
      "mailto:support@sinlessgamesllc.com"
    )
  })

  it("renders the discord card", () => {
    render(<Contact />)
    expect(screen.getByRole("heading", { name: "Discord" })).toBeInTheDocument()
    expect(
      screen.getByText(
        "We Have A wonderful community on discord. We are always looking for new members to join us. We have a great community of people that are always willing to help. We also have a great group of people that are always willing to play games with you."
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Join Our Discord" })
    ).toHaveAttribute("href", "https://discord.gg/q8YePmsK3r")
  })

  it("renders the GitHub card", () => {
    render(<Contact />)
    expect(screen.getByRole("heading", { name: "GitHub" })).toBeInTheDocument()
    expect(
      screen.getByText(
        "We have repositories on github for all of our projects. We are always looking for new people to help us out, or just follow the development process of our projects. all projects are subject to copyright and licensing."
      )
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Follow Us" })).toHaveAttribute(
      "href",
      "https://github.com/SinLess-Games"
    )
  })
})

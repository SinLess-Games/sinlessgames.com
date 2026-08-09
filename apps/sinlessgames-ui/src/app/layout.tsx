import React from "react"
import "./global.scss"
import type { Metadata } from "next"
import StyledComponentsRegistry from "./lib/registry"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ResponsiveAppBar } from "@sinlessgamesllc/react-components"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { pages } from "../variables/MainNavbar/pages"

export const metadata: Metadata = {
  metadataBase: new URL("https://sinlessgames.com/"),
  title: "SinLess Games | Create Worlds. Defy Limits.",
  description:
    "SinLess Games creates immersive, story-driven game experiences.",
  generator: "Next.js",
  creator: "Timothy A. Pierce",
  publisher: "SinLess Games LLC",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/sinless-games-mark.webp"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <AppRouterCacheProvider>
          <StyledComponentsRegistry>
            <ResponsiveAppBar
              pages={pages}
              logo="/images/sinless-games-mark.webp"
            />
            <div id="main-content">{children}</div>
            <footer className="site-footer">
              <span>SinLess Games LLC</span>
              <span className="site-footer__mark" aria-hidden="true">
                ◆
              </span>
              <span>Create worlds. Defy limits.</span>
            </footer>
          </StyledComponentsRegistry>
        </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

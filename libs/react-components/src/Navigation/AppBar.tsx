"use client"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export type NavPageType = { title: string; url: string }
export interface AppBarProps {
  pages: NavPageType[]
  logo: string | StaticImageData
}

export const ResponsiveAppBar = ({ pages, logo }: AppBarProps) => {
  const [open, setOpen] = useState(false)
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(3,3,3,.94)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(215,168,61,.38)"
      }}
    >
      <nav
        aria-label="Primary navigation"
        style={{
          width: "min(1280px,calc(100% - 2rem))",
          minHeight: 76,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem"
        }}
      >
        <Link
          href="/"
          aria-label="SinLess Games home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none"
          }}
        >
          <Image
            src={logo}
            alt=""
            width={48}
            height={48}
            style={{ objectFit: "contain" }}
          />
          <span
            style={{
              color: "#e8c769",
              fontFamily: "Cinzel,serif",
              fontSize: "clamp(.8rem,2vw,1rem)",
              fontWeight: 600,
              letterSpacing: ".15em",
              textTransform: "uppercase"
            }}
          >
            SinLess Games
          </span>
        </Link>
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="nav-toggle"
          style={{
            background: "transparent",
            color: "#e8c769",
            border: "1px solid rgba(215,168,61,.5)",
            minWidth: 44,
            minHeight: 44,
            cursor: "pointer"
          }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {pages.map((page) => (
            <Link
              key={page.title}
              href={page.url}
              onClick={() => setOpen(false)}
            >
              {page.title}
            </Link>
          ))}
          <Link
            href="/Contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Join the journey
          </Link>
        </div>
      </nav>
      <style jsx>{`
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .nav-links a {
          padding: 0.7rem 0.9rem;
          color: #bbb8b2;
          font:
            600 0.68rem Cinzel,
            serif;
          letter-spacing: 0.13em;
          text-decoration: none;
          text-transform: uppercase;
        }
        .nav-links a:hover {
          color: #f0ce77;
        }
        .nav-links .nav-cta {
          margin-left: 0.5rem;
          border: 1px solid #d7a83d;
          color: #f0ce77;
        }
        .nav-toggle {
          display: none;
        }
        @media (max-width: 760px) {
          .nav-toggle {
            display: grid;
            place-items: center;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 76px;
            left: 0;
            right: 0;
            padding: 1rem;
            background: #070707;
            border-bottom: 1px solid rgba(215, 168, 61, 0.38);
            flex-direction: column;
            align-items: stretch;
          }
          .nav-links--open {
            display: flex;
          }
          .nav-links a {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-links .nav-cta {
            margin-left: 0;
          }
        }
      `}</style>
    </header>
  )
}

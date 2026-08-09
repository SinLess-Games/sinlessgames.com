import Image from "next/image"
import Link from "next/link"

export default function Index() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__copy">
          <p className="eyebrow">Independent game studio</p>
          <h1 id="hero-title">Welcome to SinLess Games!</h1>
          <p className="hero__lead">
            SinLess Games is a game development studio building immersive,
            story-driven experiences where player imagination comes first.
          </p>
          <p className="hero__motto">Create worlds. Defy limits.</p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/Services">
              Explore our craft
            </Link>
            <Link className="button button--quiet" href="/About">
              Discover our story
            </Link>
          </div>
        </div>
        <div className="hero__emblem">
          <div className="emblem-frame">
            <Image
              src="/images/sinless-games-logo.webp"
              alt="Welcome to SinLess Games!"
              width={900}
              height={600}
              priority
            />
          </div>
        </div>
      </section>

      <section className="chapter" aria-labelledby="studio-pillars">
        <div className="section-heading">
          <p className="eyebrow">The studio creed</p>
          <h2 id="studio-pillars">Worlds forged with purpose</h2>
          <p>
            We pair deliberate design, enduring stories, and technical craft to
            make experiences worthy of a player&apos;s time.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-panel">
            <span className="feature-panel__number">I</span>
            <h3>Immersive by design</h3>
            <p>
              Every system serves the world, its story, and the player within
              it.
            </p>
          </article>
          <article className="feature-panel">
            <span className="feature-panel__number">II</span>
            <h3>Built with conviction</h3>
            <p>
              We value thoughtful execution, honest collaboration, and durable
              work.
            </p>
          </article>
          <article className="feature-panel">
            <span className="feature-panel__number">III</span>
            <h3>Community at the table</h3>
            <p>
              Players and creators help shape the journey beyond the horizon.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

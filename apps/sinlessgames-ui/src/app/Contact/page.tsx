import Card from "../../components/reusable-components/card"
import { EmailCard, DiscordCard, GithubCard } from "../../variables/Contact/cards"

export default function Contact() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Enter the hall</p>
        <h1>Contact Us</h1>
      </header>
      <section className="intro-panel" aria-labelledby="community-title">
        <h2 id="community-title">Welcome to Our Community!</h2>
        <p>We&apos;re incredibly excited to welcome you into our <strong>SinLess Games family</strong>! Whether you&apos;re a gamer, a developer, or simply someone who loves immersive experiences, we&apos;re thrilled to have you here.</p>
        <p>And if you&apos;re here to enjoy our games, we&apos;re glad to have you! Follow us on <strong>GitHub</strong> to stay updated on projects, or join us on <strong>Discord</strong> to chat with fellow community members.</p>
        <p>Once again, <strong>welcome</strong>—we can&apos;t wait to embark on this journey together!</p>
      </section>
      <section className="card-grid" aria-label="Contact channels">
        {[EmailCard, DiscordCard, GithubCard].map((card) => <Card key={card.title} {...card} />)}
      </section>
    </main>
  )
}

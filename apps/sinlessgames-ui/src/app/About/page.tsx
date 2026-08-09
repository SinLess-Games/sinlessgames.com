import Card from "../../components/reusable-components/card"
import { MissionCard, VisionCard, TeamCard } from "../../variables/About/cards"

const story = [
  "In the quiet of a humble room, amidst the glow of a computer screen, the seeds of a dream were sown. It was here, in the heart of innovation, that SinLess Gaming and Programming began its journey. Picture a young dreamer, Timothy A. Pierce, pondering the state of modern gaming. Frustration seeped into his soul as he longed for immersive experiences that seemed lost in a sea of profit-driven ventures. But one pivotal moment changed everything.",
  "In the midst of doubt, a whisper echoed in his mind, 'Do something about it. You've found a need in an industry. Now, you can fix it.' With those words igniting a fire within him, Timothy embarked on a quest to redefine gaming. He is gathering like-minded souls, forming a team driven by passion and innovation.",
  "SinLess Gaming and Programming wasn't just about creating games; it was about crafting experiences that transcended reality. Through sleepless nights and tireless dedication, they honed their craft, blending cutting-edge technology with timeless storytelling. Their journey wasn't without challenges. Doubt crept in, setbacks threatened to derail them, but their resolve remained unyielding. With every obstacle conquered, their vision grew clearer, their purpose stronger.",
  "Today, SinLess Gaming and Programming stands as a tiny beacon of inspiration in the gaming industry. Their games are meant to transport players to worlds beyond imagination, where dreams are realized and boundaries are shattered. But their story is far from over. With every game created, they strive for greater heights, pushing the boundaries of what's possible and inspiring others to follow their dreams.",
  "Join us on this awe-inspiring journey, where passion meets purpose, and impossibility is merely a stepping stone to greatness. This is our story. This is SinLess Games LLC."
]

export default function AboutUs() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">The people behind the crest</p>
        <h1>About Us</h1>
        <p>
          Independent in spirit, united by a belief that games should transport,
          challenge, and endure.
        </p>
      </header>
      <section className="card-grid" aria-label="Our studio">
        {[MissionCard, VisionCard, TeamCard].map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </section>
      <section className="story-panel" aria-labelledby="story-title">
        <p className="eyebrow">From spark to standard</p>
        <h2 id="story-title">Our Story</h2>
        {story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}

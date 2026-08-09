import Card, { CardProps } from "../../components/reusable-components/card"
import ServiceCards from "../../variables/Services/cards"

export default function Services() {
  const cards: CardProps[] = [
    ServiceCards.gameDesignCard,
    ServiceCards.webDesignCard,
    ServiceCards.customPCsCard,
    ServiceCards.communityCard,
    ServiceCards.techResearchCard,
    ServiceCards.homeNetworkCard,
    ServiceCards.smartHomeCard,
    ServiceCards.homeAutomationCard,
    ServiceCards.homeSecurityCard
  ]
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Disciplines of the forge</p>
        <h1>Services</h1>
        <p>
          At SinLess Games, we are dedicated to providing a diverse range of
          services tailored to the gaming community. We strive to make
          high-quality gaming experiences accessible to everyone, whether
          you&apos;re looking for budget-friendly options or top-of-the-line
          equipment. Our commitment to affordability means that we work hard to
          keep our services accessible without compromising on quality. Above
          all, we are here to cater to your needs and ensure that your gaming
          experience is nothing short of exceptional. Join us, and let the fun
          begin with your own custom gaming experience.
        </p>
      </header>
      <section className="card-grid card-grid--wide" aria-label="Services">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </section>
    </main>
  )
}

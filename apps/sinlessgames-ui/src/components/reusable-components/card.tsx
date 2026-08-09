import Link from "next/link"
import Image from "next/image"

export interface CardProps {
  title: string
  description?: string
  image?: string
  link?: string
  buttonText?: string
  quote?: string
  sx?: React.CSSProperties
}

export default function Card({ title, description, image, link, buttonText, quote }: CardProps) {
  const isInternal = link?.startsWith("/")
  return (
    <article className="dominion-card">
      <h2>{title}</h2>
      {image && <Image src={image} alt="" width={500} height={400} />}
      <div className="dominion-card__body">
        {quote && <p className="dominion-card__quote">{quote}</p>}
        {description && <p>{description}</p>}
      </div>
      {link && (isInternal ? (
        <Link className="button button--quiet" href={link}>{buttonText ?? "Read more"}</Link>
      ) : (
        <a className="button button--quiet" href={link} target={link.startsWith("mailto:") ? undefined : "_blank"} rel={link.startsWith("mailto:") ? undefined : "noopener noreferrer"}>{buttonText ?? "Visit"}</a>
      ))}
    </article>
  )
}

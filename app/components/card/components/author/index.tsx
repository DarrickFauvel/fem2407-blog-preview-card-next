import Image, { StaticImageData } from "next/image"

type CardAuthorProps = {
  avatar: StaticImageData
  name: string
}

const CardAuthor = ({ avatar, name }: CardAuthorProps) => {
  return (
    <section className="author flex items-center gap-3">
      <Image src={avatar} width={32} height={32} alt="author avatar" />
      <span className="font-extrabold text-sm leading-normal">{name}</span>
    </section>
  )
}
export default CardAuthor

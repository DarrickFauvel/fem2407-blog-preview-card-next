import Image, { StaticImageData } from "next/image"

type AuthorProps = {
  avatar: StaticImageData
  name: string
}

const AuthorComponent = ({ avatar, name }: AuthorProps) => {
  return (
    <section className="author flex items-center gap-3">
      <Image src={avatar} width={32} height={32} alt="author avatar" />
      <span className="font-extrabold text-sm">{name}</span>
    </section>
  )
}
export default AuthorComponent

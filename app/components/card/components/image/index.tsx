import Image from "next/image"
import { ReactNode } from "react"

type ImageProps = {
  image: string
}

function CardImage({ image }: ImageProps) {
  return (
    <div className="relative rounded-[10px] overflow-hidden">
      <Image
        src={image}
        width={279}
        height={200}
        alt="modern illustration"
        className="w-full h-full object-cover transition-all duration-200 group-hover:scale-125 group-hover:rotate-3"
      />
    </div>
  )
}

export default CardImage

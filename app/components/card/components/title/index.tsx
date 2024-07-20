import { ReactNode } from "react"

type TitleProps = {
  children: ReactNode
}

const CardTitle = ({ children }: TitleProps) => {
  return <h1 className="font-extrabold text-xl sm:text-2xl">{children}</h1>
}
export default CardTitle

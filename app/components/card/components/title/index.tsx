import { ReactNode } from "react"

type TitleProps = {
  children: ReactNode
}

const CardTitle = ({ children }: TitleProps) => {
  return <h1 className="font-extrabold text-xl">{children}</h1>
}
export default CardTitle

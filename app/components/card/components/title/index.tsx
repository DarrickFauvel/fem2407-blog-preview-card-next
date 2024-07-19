import { ReactNode } from "react"

type TitleProps = {
  children: ReactNode
}

const CardTitle = ({ children }: TitleProps) => {
  return <h3 className="font-extrabold text-xl">{children}</h3>
}
export default CardTitle

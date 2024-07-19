import { ReactNode } from "react"

type DateProps = {
  children: ReactNode
}

const CardDate = ({ children }: DateProps) => {
  return <span className="font-medium text-xs">Published {children}</span>
}
export default CardDate

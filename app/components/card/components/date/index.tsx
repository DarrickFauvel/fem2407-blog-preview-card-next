import { ReactNode } from "react"

type DateProps = {
  children: ReactNode
}

const CardDate = ({ children }: DateProps) => {
  return (
    <span className="font-medium text-xs sm:text-sm">Published {children}</span>
  )
}
export default CardDate

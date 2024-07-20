import { ReactNode } from "react"

type DateProps = {
  children: ReactNode
}

const CardDate = ({ children }: DateProps) => {
  return (
    <span className="font-medium text-xs sm:text-sm leading-normal">
      Published {children}
    </span>
  )
}
export default CardDate

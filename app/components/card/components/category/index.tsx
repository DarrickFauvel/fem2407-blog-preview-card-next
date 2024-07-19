import { ReactNode } from "react"

type CategoryProps = {
  children: ReactNode
}

const CardCategory = ({ children }: CategoryProps) => {
  return (
    <span className="bg-primary px-3 py-1 rounded font-extrabold text-xs">
      {children}
    </span>
  )
}
export default CardCategory

import { ReactNode } from "react"

type CategoryProps = {
  children: ReactNode
}

const CardCategory = ({ children }: CategoryProps) => {
  return (
    <h2 className="bg-primary px-3 py-1 rounded font-extrabold text-xs sm:text-sm leading-normal">
      {children}
    </h2>
  )
}
export default CardCategory

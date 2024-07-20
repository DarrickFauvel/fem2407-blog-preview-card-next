import { ReactNode } from "react"

type BodyProps = {
  children: ReactNode
}

const CardBody = ({ children }: BodyProps) => {
  return (
    <p className="font-medium text-sm sm:text-base leading-normal text-gray-500">
      {children}
    </p>
  )
}
export default CardBody

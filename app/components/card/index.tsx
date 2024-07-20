import illustration from "@/assets/images/illustration-article.svg"
import avatar from "@/assets/images/image-avatar.webp"
import CardImage from "./components/image"
import CardCategory from "./components/category"
import CardDate from "./components/date"
import CardTitle from "./components/title"
import CardBody from "./components/body"
import CardAuthor from "./components/author"

export default function Card() {
  return (
    <a
      href="#"
      className="group bg-white max-w-sm p-6 mx-6 my-8 border-gray-950 border-[1px] rounded-[20px] flex flex-col gap-6 drop-shadow-[8px_8px_0_black] relative transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:drop-shadow-[transparent] focus:translate-x-2 focus:translate-y-2 focus:drop-shadow-[transparent]">
      <CardImage image={illustration} />

      <div className="flex flex-col items-start gap-3">
        <CardCategory>Learning</CardCategory>
        <CardDate>21 Dec 2023</CardDate>
        <CardTitle>HTML & CSS foundations</CardTitle>
        <CardBody>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </CardBody>
      </div>

      <CardAuthor avatar={avatar} name="Greg Hooper" />
    </a>
  )
}

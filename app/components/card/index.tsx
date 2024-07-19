import illustration from "@/assets/images/illustration-article.svg"
import avatar from "@/assets/images/image-avatar.webp"
import Image from "next/image"
import CardImage from "./components/image"
import CardCategory from "./components/category"
import CardDate from "./components/date"
import CardTitle from "./components/title"
import CardBody from "./components/body"
import AuthorComponent from "./components/author"

export default function Card() {
  return (
    <article className="group min-w-[327px] max-w-sm bg-white p-6 border-gray-950 border-[1px] rounded-[20px] flex flex-col gap-6 drop-shadow-[8px_8px_0_black] relative transition-all duration-200 hover:translate-x-[8px] hover:translate-y-[8px] hover:drop-shadow-[transparent]">
      <CardImage image={illustration} />

      <section className="content flex flex-col items-start gap-3">
        <CardCategory>Learning</CardCategory>
        <CardDate>21 Dec 2023</CardDate>
        <CardTitle>HTML & CSS foundations</CardTitle>
        <CardBody>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </CardBody>
      </section>

      <AuthorComponent avatar={avatar} name="Greg Hooper" />
    </article>
  )
}

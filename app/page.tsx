import Card from "./components/card"
import Attribution from "./components/attribution"
import HiddenH1 from "./components/hidden-h1"

export default function Home() {
  return (
    <main className="relative flex flex-col sm:justify-center items-center min-h-screen">
      <HiddenH1 />
      <Card />
      <Attribution />
    </main>
  )
}

import Card from "./components/card"
import Attribution from "./components/attribution"

export default function Home() {
  return (
    <main className="relative flex flex-col sm:justify-center items-center min-h-screen">
      <Card />
      <Attribution />
    </main>
  )
}

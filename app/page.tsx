import Card from "./components/card"
import AttributionComponent from "./components/card/components/attribution"

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen">
      <Card />
      <AttributionComponent />
    </main>
  )
}

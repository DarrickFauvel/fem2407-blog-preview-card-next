import Card from "./components/card"
import AttributionComponent from "./components/card/components/attribution"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <div>
        <Card />
        <AttributionComponent />
      </div>
    </main>
  )
}

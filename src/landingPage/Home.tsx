import Navbar from "../components/Navbar"
import Hero from "./Hero"


const Home = () => {
  return (
    <div>
        <Navbar />
        <section className="bg-background h-full">
            <Hero />
        </section>
    </div>
  )
}

export default Home
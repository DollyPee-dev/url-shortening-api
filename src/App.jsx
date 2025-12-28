import Boost from "./components/Boost"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Settings from "./components/Settings"
import 'primeicons/primeicons.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Settings />
      <Boost />
      <Footer />
    </div>
  )
}

export default App
// import logo from './logo.svg'

// import { Button } from 'react-bootstrap'
import './index.css'
import {
  About,
  Contact,
  Home,
  Navbar,
  Particle,
  Skills,
  Work,
} from './components'
function App() {
  return (
    <div>
      <Particle />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App

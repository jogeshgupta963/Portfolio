// import logo from './logo.svg'

// import { Button } from 'react-bootstrap'
import "./index.css";
import {
    About,
    Achievments,
    Contact,
    Home,
    Navbar,
    Particle,
    Skills,
    Work,
} from "./components";
import Loader from "./components/Loader";
import "./loader.css";
import Blog from "./components/Blogs";
function App() {
    return (
        <div>
            {(onload) => <Loader />}
            <Particle />
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Work />
            <Blog />
            <Achievments />
            <Contact />
        </div>
    );
}

export default App;

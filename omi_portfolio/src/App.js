import './App.css';
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import TechStack from './Components/TechStack';
import Education from './Components/Education';
import Projects from './Components/Project/Projects';
import Github from './Components/Github';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <TechStack/>
      <Education/>
      <Projects/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;

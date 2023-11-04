import './App.css'
import About from './components/About/About'
import Herosection from './components/Herosection/Herosection'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Whatido from './components/Whatido/Whatido'
import Contact from './components/Contact/Contact'
function App() {

  return (
    <>
     <Navbar/>
     <Herosection/>
    <About/>
    <Whatido/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App

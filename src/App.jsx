import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Proyects from './components/Proyects'
import SectionSeparator from './components/SectionSeparator'
import SoftSkills from './components/SoftSkills'
import TechSkill from './components/TechSkill'

function App() {

  return (
    <>
      <AboutMe />
      <SectionSeparator title='Proyectos'/>
      <Proyects />
      <SectionSeparator title='Habilidades Blandas'/>
      <SoftSkills />
      <SectionSeparator title='Habilidades Técnicas'/>
      <TechSkill />
      <SectionSeparator title='Contacto'/>
      <ContactMe />
    </>
  )
}

export default App

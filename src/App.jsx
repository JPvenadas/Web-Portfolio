import React from 'react'
import Navbar from './components/sections/Navbar'
import Header from './components/sections/Header'
import Intro from './components/sections/Animation'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contacts from './components/sections/Contacts'

const App = () => {
  return (
    <div className='app'>
      <header>
      <Navbar/>
      <Header/>
      </header>
      <main>
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
      </main>
      <footer>
        <Contacts/>
      </footer>
    </div>
  )
}

export default App

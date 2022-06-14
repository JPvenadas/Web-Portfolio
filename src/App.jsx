import React from 'react'
import Navbar from './components/sections/Navbar'
import Header from './components/sections/Header'
import Intro from './components/sections/Animation'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'


const App = () => {
  return (
    <div className='app'>
      <header>
      <Navbar/>
      <Header/>
      </header>
      <main>
        <About/>
        <Skills/>
        <Projects/>
      </main>
      <Intro/>
    </div>
  )
}

export default App

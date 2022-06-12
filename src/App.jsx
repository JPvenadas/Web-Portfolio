import React from 'react'
import Navbar from './components/sections/Navbar'
import Header from './components/sections/Header'
import Intro from './components/sections/Animation'
import About from './components/sections/About'
import Skills from './components/sections/Skills'


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
      </main>
      <Intro/>
    </div>
  )
}

export default App

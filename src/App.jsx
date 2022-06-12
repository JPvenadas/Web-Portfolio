import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Intro from './components/Animation'
import About from './components/About'
import Skills from './components/Skills'


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

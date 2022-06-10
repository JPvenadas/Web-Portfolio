import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'

const App = () => {
  return (
    <div className='app'>
      <header>
      <Navbar/>
      <Header/>
      </header>
      <main>
        <About/>
      </main>
      <Intro/>
    </div>
  )
}

export default App

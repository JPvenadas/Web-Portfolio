import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Intro from './components/Intro'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <main>
      <Header/>
      </main>
      <Intro/>
    </div>
  )
}

export default App

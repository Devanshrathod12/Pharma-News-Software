import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import News from './components/News'
import About from './components/About'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
     <Navbar />
     <Home/>
     <News/>
     <About/>
     <Footer/>
    </div>
  )
}

export default App

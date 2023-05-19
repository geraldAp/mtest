import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Showcase from './components/showcase'
import Services from './components/services'
import Contact from './components/contact'
import Footer from './components/footer'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Showcase/>
     <Services/>
     <Contact/>
     <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default App

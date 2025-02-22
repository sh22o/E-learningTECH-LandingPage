import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Values from './components/Values/Values'
import Subscribe from './components/Subscribe/Subscribe'
import Courses from './components/Courses/Courses'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

function App() {
  return (
     <> 
      <main className="overflow-x-hidden bg-white text-dark"> 
      
        <Hero></Hero> 
        <Services></Services> 
        <Courses></Courses>
        <Values></Values> 
        <Subscribe></Subscribe> 
        <FAQ></FAQ> 
        <Footer></Footer>
        
      </main>
     
     </>
  )
}

export default App
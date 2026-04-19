import { useState } from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import { Footer } from '../layout/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />          
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App

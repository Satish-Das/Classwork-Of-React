import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionOne from './components/SectionOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <SectionOne />
      <Footer />
    </>
  )
}

export default App

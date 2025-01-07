import { useState } from 'react'
import './App.css'
import Navbar from './components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-background font-Lato'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App

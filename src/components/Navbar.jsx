import React from 'react'
import {useEffect, useState} from 'react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  return (
    <>
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50' id='home'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Matheus Meigre</div>
            <div className='space-x-6'>
                <a href="home" className='hover:text-red-300'>Home</a>
                <a href="#about" className='hover:text-blue-300'>About</a>
                <a href="#services" className='hover:text-green-300'>Services</a>
                <a href="#projects" className='hover:text-orange-300'>Projects</a>
                <a href="#contact" className='hover:text-green-200'>Contact</a>
            </div>
              <button className='bg-gradient-to-r from-blue-400 to-green-500 text-white hidden md:inline transform transition-transform
              duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer'>
                Conecte-se comigo.
              </button>
    
        </div>
    </nav>
    </>
  )
}

export default Navbar
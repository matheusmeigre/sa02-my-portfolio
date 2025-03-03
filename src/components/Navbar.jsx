import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='bg-black text-white p-4 md:px-16 lg:px-24 sticky top-0 z-50' id='home'>
          <div className='container py-2 flex justify-center md:justify-between items-center'>
              <div className='text-2xl font-bold hidden md:inline'>Matheus Meigre</div>
              <div className='space-x-6'>
                  <a href="home" className='hover:text-red-300'>Início</a>
                  <a href="#about" className='hover:text-blue-300'>Sobre</a>
                  <a href="#services" className='hover:text-green-300'>Serviços</a>
                  <a href="#projects" className='hover:text-orange-300'>Projetos</a>
                  <a href="#contact" className='hover:text-green-200'>Contato</a>
              </div>
                <button className='bg-gradient-to-r from-blue-400 to-green-500 text-white hidden md:inline transform transition-transform
                duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer'>
                  <a href="https://www.linkedin.com/in/matheus-meigre/" target='_blank'>Conecte-se comigo.</a>
                </button>
      
          </div>
      </nav>
    </>
  )
}

export default Navbar
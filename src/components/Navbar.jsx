import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = ({toggleTheme}) => {
    const [theme, setTheme] = useState(() => {
      return localStorage.getItem("theme") || "light"; // Busca o tema salvo ou define "light" por padrão
    });
  
    useEffect(() => {
      // Define a classe "dark" no <html> ou <body> baseado no tema
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Salva a preferência no localStorage
      localStorage.setItem("theme", theme);
    }, [theme]);
    const toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
  return (
    <>
    <nav className='bg-white dark:bg-gray-800 p-4 md:px-16 lg:px-24 sticky top-0 z-50' id='home'>
      <button onClick={toggleTheme} className='bg-gradient-to-r from-blue-400 to-green-500 text-white 
      transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer'>
        {theme === 'dark' ? '🌞' : '🌜'}
      </button>
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
                Conecte-se comigo.
              </button>
    
        </div>
    </nav>
    </>
  )
}

export default Navbar
import './App.css'
import { useState, useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import Footer from './components/Footer'

function App() {
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

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Navbar  toggleTheme={toggleTheme}/>
      <Hero toggleTheme={toggleTheme}/>
      <About toggleTheme={toggleTheme}/>
      <Service toggleTheme={toggleTheme}/>
      <Projects toggleTheme={toggleTheme}/>
      <Contact  toggleTheme={toggleTheme}/>
      <Footer toggleTheme={toggleTheme}/>
    </div>
  )
}

export default App

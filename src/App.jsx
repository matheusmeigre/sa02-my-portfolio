import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import MyProfile from './components/MyProfile'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('color-theme');
      if (storedTheme) {
        return storedTheme === 'dark';
      } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.getElementById('spa').classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.getElementById('spa').classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div id='spa'>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <MyProfile />
      <About />
      <Service />
      <Projects />
      <Contact  />
      <Footer />
    </div>
  )
}

export default App

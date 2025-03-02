import React from 'react'
import pizzaSite from '../assets/pizza.png'
import weatherWeb from '../assets/weather-web.png'
import taskManager from '../assets/task-manager.png'
import loginForm from '../assets/login-form.png'
import canva from '../assets/canva.png'

const projects = [
    {
        id: 1,
        name: 'Pizza Site',
        description: 'Site de uma pizzaria fictícia com sistema de carrinho.',
        technologies: 'HTML, CSS, JavaScript',
        image: pizzaSite,
        link: 'https://matheusmeigre.github.io/projeto-pizzaria/',
    },
    {
        id: 2,
        name: 'Weather Web',
        description: 'Site para buscar o clima de qualquer cidade.',
        technologies: 'HTML, CSS, JavaScript',
        image: weatherWeb,
        link: 'https://matheusmeigre.github.io/projeto-clima/',
    },
    {
        id: 3,
        name: 'Task Manager',
        description: 'Gerenciador de tarefas multifuncional.',
        technologies: 'ReactJS, TailwindCSS',
        image: taskManager,
        link: 'https://react-task-manager-hazel.vercel.app/',
    },
    {
        id: 4,
        name: 'Login Form',
        description: 'Validador de login funcional.',
        technologies: 'HTML, CSS, JavaScript',
        image: loginForm,
        link: 'https://matheusmeigre.github.io/projeto-form/',
    },
    {
        id: 5,
        name: 'Canva',
        description: 'Site com funcionalidade de desenho no quadro.',
        technologies: 'HTML, CSS, JavaScript',
        image: canva,
        link: 'https://matheusmeigre.github.io/projeto-canva/',
    }
]

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Meus Projetos</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project => (
                    <div key={project.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg
                    transform transition-transform duration-300 hover:scale-105'> 
                        <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-42 object-cover' />
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <h2 className='text-gray-400 mb-4 '>{project.description}</h2>
                        <p className='text-gray-500 mb-4 font-bold'>{project.technologies}</p>
                        <a href={project.link} className='inline-block bg-gradient-to-r from-blue-400 to-green-500
                        text-white px-4 py-2 rounded-full hover:scale-105 transform transition-transform duration-300' 
                        target='_blank' rel='noopener noreferrer'>GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
import React from 'react'
import { FaGithub, FaInstagram, FaMedium } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center  mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2'>Matheus Meigre</h3>
                    <p className='text-gray-400'>Desenvolvedor FullStack - Minas Gerais, Brasil - {new Date().getFullYear()}</p>
                </div>
                <div className='flex-1 w-full'>
                    <div>
                        <h3 className='text-2xl font-bold mt-4'>Inscreva-se para novidades</h3>
                        <p className='text-gray-400 mb-2'>Receba atualizações sobre meu trabalho e novidades.</p>
                    </div>
                    <form 
                        action="https://formsubmit.co/matheusmeigre011@gmail.com" 
                        method="POST" 
                        className='flex items-center justify-center'>
                        <input type="email" 
                        placeholder='Digite seu email'
                        name='email'
                        className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600
                        focus:outline-none focus:border-blue-500'
                        />
                        <button 
                            type='submit'
                            className='bg-gradient-to-r from-blue-400 to-green-500 text-white px-4 py-2 
                            rounded-r-lg w-1/2 hover:scale-105 transform transition-transform duration-300 cursor-pointer'>
                            Inscrever-se
                        </button>
                    </form>
                </div>
            </div>
            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                <div>
                    &copy; {new Date().getFullYear()} Matheus Meigre. Todos os direitos reservados.
                </div>
                <div className='flex space-x-4 my-4 md:my-0'>
                    <a href="" className='text-gray-400 hover:text-white'>
                        <FaInstagram />
                    </a>
                    <a href="" className='text-gray-400 hover:text-white'>
                        <FaGithub />
                    </a>
                    <a href="" className='text-gray-400 hover:text-white'>
                        <FaMedium />
                    </a>
                </div>
                <div className='flex space-x-4'>
                    <a href="" className='text-gray-400 hover:text-white'>
                        Privacidade
                    </a>
                    <a href="" className='text-gray-400 hover:text-white'>
                        Termos de Serviço
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
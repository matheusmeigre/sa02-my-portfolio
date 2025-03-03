import React from 'react'
import { FaArrowUp, FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkedAlt } from 'react-icons/fa'

const Contact = () => {
  return (
        <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Sobre mim</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>

                   <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 mb-4'>Vamos Conversar.</h3>
                   <p>Estou aberto a discutir assuntos sobre Desenvolvimento Web, projetos ou colaborações com seu código.</p>
                   <div className='mb-4 mt-8'>
                    <FaEnvelope className='inline-block text-green-400 mr-2' />
                    <a href="mailto:matheusmeigre@gmail.com" className='hover:underline'>
                        matheusmeigre@gmail.com
                    </a>
                   </div>

                   <div className='mb-4'>
                    <FaLinkedin className='inline-block text-green-400 mr-2' />
                    <span>@matheusmeigre</span>
                   </div>
                   <div className='mb-4'>
                    <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
                    <span>Minas Gerais, Brasil.</span>
                   </div>
                </div>
                <div className='flex-1 w-full'>
                    <form action="" className='space-y-4'>
                        <div>
                            <label htmlFor="name" className="block mb-2">Seu Nome</label>
                            <input type="text"
                            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500'
                            placeholder='Digite Seu Nome'
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">Seu Email</label>
                            <input type="text"
                            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500'
                            placeholder='Digite Seu Email'
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">Sua Mensagem</label>
                            <textarea type="text"
                            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500'
                            placeholder='Digite Aqui Sua Mensagem'
                            rows="5"
                            />
                        </div>
                        <button className='bg-gradient-to-r from-blue-400 to-green-500 text-white hidden md:inline transform transition-transform
                        duration-300 hover:scale-105 px-8 py-2 rounded-full cursor-pointer'>
                            Enviar
                        </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Contact
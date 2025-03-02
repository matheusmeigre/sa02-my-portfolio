import React from 'react'
import MyImage from '../assets/my-image.png'

const Hero = () => {
  return (
      <div className='bg-black text-white text-center py-16'>
          <img src={MyImage} alt="Matheus Meigre"
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
          <h1 className='text-4xl font-bold'>
              Eu sou {''}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500'>Matheus Meigre</span>
              , FullStack Developer
          </h1>
          <p className='text-lg mt-4 text-gray-300'>
              Sou um Desenvolvedor FullStack residente em Minas Gerais, Brasil. Eu tenho uma paixão por tecnologia e por criar coisas funcionais!
          </p>
          <div className='mt-8 space-x-4'>
              <button className='bg-gradient-to-r from-blue-400 to-green-500 text-white px-4 py-2 rounded-full transform
              transition-transform duration-300 hover:scale-105 cursor-pointer'>Fale Comigo!</button>
              <button className='bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-4 py-2 rounded-full transform
              transition-transform duration-300 hover:scale-105 cursor-pointer'>Veja Meus Projetos!</button>
          </div>
      </div>
  )
}

export default Hero
import React, { useState } from 'react'
import MyImage from '../assets/my-image.png'
import Modal from './Modal'
import { SiGoogleforms } from "react-icons/si";

const MyProfile = () => {
    const [open, setOpen] = useState(false)
  return (
      <div className='text-center py-50'>
          <img src={MyImage} alt="Matheus Meigre"
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
          <h1 className='text-4xl font-bold'>
              Eu sou {''}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500'>Matheus Meigre</span>
              , FullStack Developer
          </h1>
          <p className='text-lg mt-4' id='Apresentation'>
              Sou um Desenvolvedor FullStack residente em Minas Gerais, Brasil. Eu tenho uma paixão por tecnologia e por criar coisas funcionais!
          </p>
          <div className='mt-8 space-x-4 flex flex-row justify-center'>
            <div className='transition-transform duration-600 hover:scale-105 hover:opacity-90'>
                <a href="#" className="bg-gradient-to-r from-blue-400 to-green-500 text-white px-4 py-2 rounded-full mt-8 space-x-4" onClick={() => setOpen(true)}>Fale Comigo!</a>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className='text-center w-56'>

                <SiGoogleforms size={56} className='mx-auto text-blue-400/80' />
                <div className='mx-auto my-4 w-48'>
                    <h3 className='text-lg font-black text-gray-800'>Vamos manter contato?</h3>
                    <p className='text-sm text-gray-500'>
                        Clique no botão abaixo e me envie uma mensagem direta, estarei aberto
                        a conversas e discussões sobre a área!
                    </p>
                </div>
                <div className='flex gap-4'>
                    <a className="btn btn-danger w-full cursor-pointer transition-transform duration-600 hover:scale-105">Contatar</a>
                </div>
                </div>
            </Modal>
            <div className='transition-transform duration-600 hover:scale-105 hover:opacity-90'>
                <a href="#projects" className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-600">Veja Meus Projetos!</a>
            </div>
          </div>
      </div>
  )
}

export default MyProfile
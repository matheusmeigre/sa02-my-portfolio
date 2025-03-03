import React from 'react'

const services = [
    {
        id: 1,
        title: 'Desenvolvimento Web',
        description: 'Construção de sites e aplicações responsivas, unindo design atrativo e código eficiente para proporcionar a melhor experiência ao usuário.'
    },
    {
        id: 2,
        title: 'Edição de Vídeos',
        description: 'Edição de vídeos dinâmica e criativa, com cortes precisos, transições suaves e ajustes que valorizam cada cena.'
    },
    {
        id: 3,
        title: 'Desenvolvimento FullStack',
        description: 'Criação de aplicações completas, do front-end ao back-end, com foco em performance, escalabilidade e experiência do usuário.'
    }
]

const Service = () => {
  return (
    <div className='bg-black text-white py-20' id='services'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Serviços</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map(service => (
                    <div key={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg 
                    transform transition-transform duration-300 hover:scale-105'>
                        <div className='text-right text-2xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-blue-400 to-green-500'>
                            {service.id}
                        </div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-blue-400 to-green-500'>
                            {service.title}
                        </h3>
                        <p className='mt-2 text-gray-300'>{service.description}</p>
                        <a href="#" className='mt-4 inline-block bg-gradient-to-r from-blue-400 to-green-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition-transform duration-300'>Saiba Mais</a>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Service
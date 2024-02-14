import React from 'react'
import css from '../Assets/css.png'
import github from '../Assets/github.png'
import html from '../Assets/html.png'
import js from '../Assets/javascript.png'
import react from '../Assets/react.png'
import tailwind from '../Assets/tailwind.png'

function Technologies() {

  const techs=[{
    id: 1,
    src: html,
    color: "shadow-orange-500",
    nam: "HTML"
  },{
    id: 2,
    src: css,
    color: "shadow-blue-500",
    nam: "CSS"
  },{
    id: 3,
    src: js,
    color: "shadow-yellow-500",
    nam: "JavaScript"
  },{
    id: 4,
    src: github,
    color: "shadow-gray-500",
    nam: "Github"
  },{
    id: 5,
    src: react,
    color: "shadow-cyan-500",
    nam: "ReactJS"
  },{
    id: 6,
    src: tailwind,
    color: "shadow-blue-500",
    nam: "TailwindCSS"
  },]

  return (
    <div name="technologies" className='w-full h-screen bg-gradient-to-b  from-gray-800  to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-400 inline'>Technologies:</p>
        </div>
        <div className=' grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 sm:px-1 text-center w-full'>
        {
                    techs.map(({id,src,color,nam})=>
                        <div key={id} className={`shadow-md ${color} rounded-lg duration-200 hover:scale-105 `}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className=' flex justify-center pt-5'>{nam}</p>
                            
                        </div>
                           
                )
             
            }
        </div>
      </div>
    </div>
  )
}

export default Technologies
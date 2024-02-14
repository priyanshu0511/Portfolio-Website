import React from 'react'
import image from '../Assets/2517908.jpg'
import { FaArrowRight } from "react-icons/fa";


function Home() {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 max-h-screen'>
        <div className='text-white md:flex-row w-full flex flex-col h-full max-w-screen-lg mx-auto justify-center items-center '>
          <div className=' flex flex-col justify-center '>
            <h2 className='text-4xl sm:text-7xl'>I am a Developer</h2>
            <p className=' text-gray-300 py-4 max-w-md'>A passionate computer science student with focus on web development and turning ideas into experiences.</p>
            <div>
              <a href="https://drive.google.com/file/d/1DmXswZWBtWimnKqO4rlhmZy6mc5xkEKM/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className='group w-fit px-6 py-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                Resume &nbsp;<span className='group-hover:rotate-90 duration-300'>
                  <FaArrowRight /></span>
              </button></a>
            </div>
          </div>
          <div className='md:w-2/3 '>
            <img src={image} alt="" className='mx-auto rounded-2xl w-2/3'/>
          </div>
        </div>
    </div>
  )
}

export default Home
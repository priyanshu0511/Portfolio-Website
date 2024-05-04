import React from 'react'
import Weather from '../Assets/ProjectsPics/Weather.png'
import Dictionary from '../Assets/ProjectsPics/Dictionary.png'
import ImageSearch from '../Assets/ProjectsPics/ImageSearch.png'

function Projects() {

    const projects=[
    {
        id: 1,
        src: ImageSearch,
        nam: "Image-Search-App",
        github: "https://github.com/priyanshu0511/image-search-app",
        live: "https://imagesearchbypriyanshu.netlify.app//"
    },
    {
        id: 2,
        src: Weather,
        nam: "Weather-app",
        github: "https://github.com/priyanshu0511/Weather-App",
        live: "https://weatherappbypriyanshu.netlify.app/"
    },
    {
        id: 3,
        src: Dictionary,
        nam: "Dictionary-app",
        github: "https://github.com/priyanshu0511/Dictionary-App",
        live: "https://dictionarybypriyanshu.netlify.app/"
    }
    ]

  return (
    <div name='projects' className=' bg-gradient-to-b from-black via-black to-gray-800 w-full md:h-screen text-white pt-20 sm:pt-0'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-400 inline'>Projects</p>
            </div>
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-1'>
                {
                    projects.map(({id,src,nam,github,live})=>
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <p className=' flex justify-center pt-5'>{nam}</p>
                            <div className='flex justify-center'>
                                <a href={live} target="_blank" rel="noopener noreferrer"><button className='w-1/2 px-6 pb-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                                <p className='pb-3 m-4 text-2xl'>|</p>
                                <a href={github} target="_blank" rel="noopener noreferrer"><button className='w-1/2 px-6 pb-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                           
                )
             
            }
            </div>
            
        </div>
    </div>
  )
}

export default Projects
import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b  from-gray-800  to-black text-white'>
        <div className='flex flex-col px-4 mx-auto justify-center max-w-screen-lg'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-400 inline'>About</p>
            </div>
            <div className=' text-xl mt-20'>
                <p>Hey there 👋, I'm Priyanshu, on a journey through front-end development. I've learned HTML, CSS, JavaScript, and TailwindCSS. Now, I'm immersing myself in React to build even cooler stuff. Join me as I create web experiences that captivate and inspire. Let's code together! 🌟</p>
                <br />
                <p>In all my pursuits, I'm driven by a strong focus, pouring my energy into every task with dedication. I believe in the power of collaboration, recognizing that together, we achieve greater heights. I tackle challenges with determination and adaptability, always striving for excellence. In my spare time, I like to read books 📚, listen to music 🎧 and watch movies 📺.</p>
                <br />
                <p>"By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired" - <i>Franz Kafka.</i></p>
        </div>
        </div>
        
    </div>
  )
}

export default About
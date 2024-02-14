import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [msg,setMsg]=useState("");
  const [error,setError]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if(name.length===0||email.length===0||msg.length===0)
    {
      setError(true);
      alert("Please enter all the fields!");
    }
    else{
    emailjs
      .sendForm('service_edeouz8', 'template_c9q0hbd', form.current, {
        publicKey: 'zwPImE6xDpEHZKaSo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message has been sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
    }
  };

  return (
    <div name='contact' className=' bg-gradient-to-b from-black via-black to-gray-800 w-full md:h-screen text-white pt-20 sm:pt-0'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-400 inline'>Contact:</p>
          <p className='py-6'>Submit the form below to get in contact with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
            <input type="text" onChange={e=>setName(e.target.value)} name='from_name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            {error && name.length<=0?<label className='my-4'>Name cannot be empty!</label>:""}
            <input type="text" onChange={e=>setEmail(e.target.value)} name='from_email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            {error && email.length<=0?<label className='mb-4'>Email cannot be empty!</label>:""}
            <textarea name="message" onChange={e=>setMsg(e.target.value)} placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            {error && msg.length<=0?<label className='mt-4'>Message cannot be Empty!</label>:""}
            <button  className='px-6 py-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 hover:scale-105 my-8 mx-auto'>Let's Talk!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
import React from 'react'
import { useState } from 'react';

function Clock() {
    let time = new Date().toLocaleTimeString();

    const [ctime, setTime] = useState(time);
    const UpdateTime = () =>{
        time= new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(UpdateTime)
  return (
     <div className='w-full h-screen bg-red-500'>
      <div className='flex justify-center place-items-center '>
      <h1 className='flex items-center justify-center  text-[60px] font-bold bg-yellow-600 rounded-full w-60 h-20 '>Clock</h1>
      <p className='text-[white] italic text-[30px] font-bold'>{ctime}</p>
      </div>
     </div>
    
  )
}

export default Clock
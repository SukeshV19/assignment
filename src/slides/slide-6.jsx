import React, { useState } from 'react'
import { CiMicrophoneOn } from 'react-icons/ci'
import { FaArrowLeft } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import { LuSmilePlus } from 'react-icons/lu'
import { MdPhotoCamera } from 'react-icons/md'
import { TbPhotoVideo } from 'react-icons/tb'

function Slide6() {
  const [messages, setMessages] = useState([
    'Hello!',
    'How are you?',
    'Can i get some help?',
    'I am looking for a new design.',
  ])
  const [msg, setMsg] = useState('')
  return (
    <div className="m-1 w-full flex items-start justify-center">
      <div className='flex flex-col items-start m-2 p-2 justify-start w-[400px] shadow-md bg-gray-950 h-[90vh]'>
        <div className='flex items-center gap-10'>
          <FaArrowLeft className='text-white text-xl' />
          <div className='flex items-center gap-3'>
            <div className='w-[30px] h-[30px] rounded-full border border-white'></div>
            <p className='text-white'>Sheindiaxgallari5</p>
          </div>
        </div>
        <div className='h-[50%]'></div>
        <div className='w-full px-3 flex items-end gap-2'>
          <div className='w-[30px] h-[30px] rounded-full border border-white'></div>
          <div className='w-[80%] bg-zinc-600 h-[50px] rounded-xl'></div>
        </div>
        {messages.map((msg, index) => {
          const isFirst = index === 0
          const isLast = index === messages.length - 1
          const isMiddle = !isFirst && !isLast

          return (
            <div key={index} className="flex flex-col items-end justify-end w-full">
              <p className={`bg-blue-500 text-white mt-[2px] ${isFirst ? 'p-2 rounded-t-xl rounded-l-xl' : ''} ${isLast ? 'p-2 rounded-b-xl rounded-l-xl' : ''} ${isMiddle ? 'p-1 rounded-sm' : ''}`}>{msg}</p>
            </div>
          )
        })}

        <div className='w-full mt-3 flex flex-col items-center justify-center'>
          <div className='flex px-3 gap-1 absolute w-[380px] items-center'>
            <MdPhotoCamera className='text-white bg-blue-500 p-[5px] rounded-full text-4xl z-15' />
            <div className='w-[60%] -z-10'></div>
            <CiMicrophoneOn className='text-white text-2xl z-15'/>
            <TbPhotoVideo className='text-white text-2xl z-15' />
            <LuSmilePlus className='text-white text-2xl z-15' />
            <button onClick={() => {setMessages([...messages, msg])}} className='z-15'><IoMdSend className='text-blue-400 ml-1 text-3xl'/></button>
          </div>
          <input className='rounded-full bg-zinc-700 text-gray-100 p-3 w-full pl-13 z-10' placeholder="Message..." value={msg} onChange={(e)=>setMsg(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default Slide6
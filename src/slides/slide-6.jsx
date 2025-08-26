import React from 'react'
import { CiMicrophoneOn } from 'react-icons/ci'
import { FaArrowLeft } from 'react-icons/fa'
import { LuSmilePlus } from 'react-icons/lu'
import { MdPhotoCamera } from 'react-icons/md'
import { TbPhotoVideo } from 'react-icons/tb'

function Slide6() {
  return (
    <div className="m-1 w-full flex items-start justify-center">
        <div className='flex flex-col items-start m-2 p-2 justify-start w-[400px] shadow-md bg-gray-950 h-[90vh]'>
            <div className='flex items-center gap-10'>
                <FaArrowLeft className='text-white text-xl'/> 
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
            <div className='flex flex-col items-end justify-end w-full mt-5'>
                <div className='w-[80%] bg-blue-500 h-[50px] rounded-t-xl rounded-l-xl my-[2px]'></div>
                <div className='w-[60%] bg-blue-500 h-[40px] rounded-b-xl rounded-l-xl'></div>
            </div>
            <div className='w-full mt-auto flex flex-col items-center justify-center'>
                <div className='flex px-3 gap-1 absolute w-[400px]'>
                    <MdPhotoCamera className='text-white bg-blue-500 p-[5px] rounded-full text-4xl'/>
                    <div className='w-[60%]'></div>
                    <CiMicrophoneOn  className='text-white text-3xl'/>
                    <TbPhotoVideo className='text-white text-3xl'/>
                    <LuSmilePlus className='text-white text-3xl'/>
                </div>
                <input className='rounded-full bg-zinc-700 text-gray-100 p-3 w-full pl-13' placeholder="Message..."/>
            </div>
        </div>
    </div>
  )
}

export default Slide6
import React from 'react'
import { useState } from 'react'
import {RiCloseFill} from "react-icons/ri"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={'w-screen h-screen ${ isOpen ? "fixed" : "hidden"} top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center'}>
     <div className='absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px] hover:cursor-pointer'
      onClick={toggleSidebar}>
        <RiCloseFill/>
        </div>
        <div className='flex flex-col gap-4 text-[28px]'>
        <a className='hover"text-white'>home</a>
        <a className='hover"text-white'>port</a>
        <a className='hover"text-white'>about</a>
        <a className='hover"text-white'>contact</a>    
        </div> 
    </div>
  )
} 

export default Sidebar

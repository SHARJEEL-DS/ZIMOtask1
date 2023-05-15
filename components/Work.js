import React from 'react'
import Hea from '../components/Hea'
import { Slider } from '@mui/material'
// import Slider from 'react-slick';
// import Carousel from 'carousel'
// import carousel from 'carousel'
const work = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
    <Hea title="OUR CATEGORIES" />
    <div className=' grid grid-cols-3 gap-4'>
    
        <div className='row-span-2 relative group'>
           
            <img src='/a.jpg' alt=''/>

        </div>
        <div className='relative group'>
            <img src='/b.jpg' alt=''/>

        </div>
        <div className='relative group'>
            <img src='/a.jpg' alt=''/>

        </div>
        
    </div>
    </section>
  )
}

export default work

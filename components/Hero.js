import React from 'react'
// import Typewriter from "typewriter-effect"
// import Button from './Button'
// import Button from '../components/Button'
function Hero() {
  return (
    <div className='bg-[url("/a.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
        <div className='container mx-auto px-4'>\
            <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
                <div >
                    <h4 className='text-[30px]' >DISCOVER</h4>
                    <h1 className='text-[60px]'>
                    A NEW WORLD 
                    {/* <Typewriter
                    options={{
                        strings: [
                            "React developer"
                        ],
                        changeDelay: 3,
                        changeDeleteSpeed: 2,
                        autoStart: true ,
                        loop: true,

                    }}/> */}
                    
                    </h1>
                    
                    <div className=' pt-2'>
                        <p >
                          hello i am here 
                          </p>
                          {/* <button className=' bg-[#f8251e]  text-white py-2 px-4 rounded inline-block mt-10
        font-medium border border-[#f8251e] hover:bg-transparent hover:text-[#f8251e]
        transition duration-200 '> Learn more  </button> */}
                     </div>

                    
                </div>
            </div>

        </div>


      
    </div>
  )
}

export default Hero

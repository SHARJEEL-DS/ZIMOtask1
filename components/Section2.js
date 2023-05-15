import React from 'react'

function Section2() {
  return (
    <div className='bg-white p-12'>
      <div className='flex w-full'>
      <div >
                    <h1 className='text-[80px]' >ZIMO</h1>
                    <h1 className='text-[30px]'>
                    ONE SOURCE
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
                        <p  className='text-[40px]'>
                          ENTRY TICKETS 
                          </p>
                          {/* <button className=' bg-[#f8251e]  text-white py-2 px-4 rounded inline-block mt-10
        font-medium border border-[#f8251e] hover:bg-transparent hover:text-[#f8251e]
        transition duration-200 '> Learn more  </button> */}
                     </div>

                    
                </div>
            {/* <div className='w-6/12 mt-28  '>
                    <p className='text-[80px]'> ZIMO <span className='text-[14px] leading-tight mt-8 mr-10'> one source</span> </p>
            </div> */}
            <div className='w-6/12 ml-60  '>
                <img src='/e.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Section2

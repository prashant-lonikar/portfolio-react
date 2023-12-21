import React from 'react'

const About = () => {
  return (
    <div name = 'about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <p className='text-4xl font-bold'>Hi, I'm Prashant, nice to meet you! Have a look around :)</p>
                <p className='text-[#8892b0]'>I am passionate about green bonds and climate finance. Currently I am helping develop an AI platform for climate investing at ClimateAligned.</p>
            </div>
        </div>
    </div>
  )
}

export default About
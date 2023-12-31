import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

export const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-white font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Prashant Lonikar
            </h1>
            <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>I am a Climate Finance Analyst.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I specialise in green bond screening and analysis. Currently I am helping develop an AI platform for climate investing at ClimateAligned.</p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
            </div>
        </div>

    </div>
  )
}

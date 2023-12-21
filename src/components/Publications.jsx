import React from 'react'
import IndiaSOTM from '../assets/publications/india-sotm.png'
import HKBrief from '../assets/publications/hk-brief.png'
import LatAmSOTM from '../assets/publications/latam-sotm.png'
import PISOTM from '../assets/publications/pi-sotm.png'

const Publications = () => {
  return (
    <div name='publications'>
        {/* Container */}
            <div>
                <p className='text-4xl font-bold ml-4 py-4'>Experience</p>
                <p className='text-[#8892b0] ml-4'>These are some of the reports I co-authored on the topic of climate finance.</p>
            </div>


            <div className=' w-full grid items-center sm:grid-cols-4 gap-8 px-4 py-4'>
                <img onClick={() => window.open('https://www.climatebonds.net/files/reports/cbi_india_sotm_2021_final.pdf')} 
                className='mx-4 h-auto w-auto max-w-[250px] cursor-pointer hover:scale-105 duration-300 shadow-xl' 
                src={IndiaSOTM} alt="" />

                <img onClick={() => window.open('https://www.climatebonds.net/files/reports/cbi_lac_2020_04e.pdf')} 
                className='mx-4 h-auto w-auto max-w-[250px] cursor-pointer hover:scale-105 duration-300 shadow-xl' 
                src={LatAmSOTM} alt="" />

                <img onClick={() => window.open('https://www.climatebonds.net/files/reports/cbi_post_issuance_2021_02g.pdf')}
                className='mx-4 h-auto w-auto max-w-[250px] cursor-pointer hover:scale-105 duration-300 shadow-xl' 
                src={PISOTM} alt="" />

                <img onClick={() => window.open('https://www.climatebonds.net/files/reports/cbi_hkgb_2020_04c.pdf')}
                className='mx-4 px-4 h-auto w-auto max-w-[250px] cursor-pointer hover:scale-105 duration-300 shadow-xl' 
                src={HKBrief} alt="" />
            </div>
        </div>
  )
}

export default Publications
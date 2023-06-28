import React from 'react'
import Saly from "../asset/saly.png"

export default function Banner() {
  return (
    <>
    <div
    style={{
        background:"linear-gradient(135deg, #F6AE42 34.88%, #FF52E5 100%)"

    }}
    className='grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto pt-20 rounded-t-3xl rounded-bl-3xl rounded-br-3xl md:rounded-br-[200px]'>
    <div className='md:col-span-2 self-center mx-5 md:ml-10'>
    <p className='font-[700] font-josh text-[24px] md:text-[35px] lg:text-[50px] xl:text-[65px] 2xl:text-[75px] text-white'>Reading with students whenever you can’t</p>
    <button className='mt-5 font-josh font-[700] text-[#787878] text-[15px] md:text-[20px] bg-white py-3 px-5 rounded-xl'>Get Started</button>
    </div>
    <div className='md:grid grid-cols-1 pb-10 md:pb-0'>
    <img src={Saly} className='w-[70%] md:w-[100%] mx-auto md:mx-0 mt-10 md:mt-0' />
    </div>
    </div>
      
    </>
  )
}

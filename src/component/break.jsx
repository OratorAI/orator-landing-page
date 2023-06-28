import React from 'react'
import Mic from  "../asset/mic.png"
import Mic2 from  "../asset/mic2.png"
import Mic3 from  "../asset/mic3.png"
import Mic4 from  "../asset/mic4.png"
import Mic5 from  "../asset/mic5.png"
import Mic6 from  "../asset/mic6.png"
import Arr from  "../asset/arr.png"

export default function Break() {

const data =[
    {
        img:Mic,
        title:"Reading Accountability",
    },
    {
        img:Mic2,
        title:"Actionable Insights",
    },
    {
        img:Mic3,
        title:"Accessibility Features",
    },
    {
        img:Mic4,
        title:"Research-backed learning methods",
    },
    {
        img:Mic5,
        title:"Customizable Assignments",
    },
    {
        img:Mic6,
        title:"Best-in-class Security",
    },
    
]   
    
  return (
    <>
    <div className='relative'>
      <div className='  grid grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto py-10'>
         <div className='relative z-10  lg:col-span-1 mt-10'>
          <p className='font-[700] font-josh text-[25px] md:text-[45px] xl:text-[50px] 2xl:text-[70px]  w-[90%] md:w-[70%] leading-[60px] 2xl:leading-[70px]'>What makes us  great:</p>
         </div>

         <div className='lg:col-span-2 mt-10 lg:mt-0 relative z-10 xl:-ml-20'>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10'>
         {data.map((user) => (
            <div className='bg-white shadow-2xl p-4 rounded-[40px]'>
                <img src={user.img}  className='w-[35%] xl:w-[40%] mx-auto mt-10 h-[40%] md:h-[40%] xl:h-[40%]'/>
                <p className='ssd my-4 xl:my-2  font-josh font-[700] text-[37px] md:text-[22px] lg:text-[18px] xl:text-[29px]'>{user.title}</p>
            </div>
         ))}
         </div>
         </div>
      </div>
      <img src={Arr} className='hidden lg:block absolute top-[27%] xl:top-[25%] right-0 w-[95%]' />
      </div>
    </>
  )
}

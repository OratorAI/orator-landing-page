import React from 'react'
import Tea from "../asset/tea.png"
import Blur from "../asset/blur.png"
import Blur2 from "../asset/blur2.png"
import Design2 from "../asset/design2.png"
import Book from "../asset/book.png"


export default function Design() {
  return (
    <>
    <img src={Blur} className='mt-10'/>
    <div className='bg-black' >
      <div className='grid grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto py-10'>
      <div className='  lg:col-span-1 self-center hidden lg:block'>
          <p className=' font-[700] font-josh text-[25px] md:text-[45px] xl:text-[50px]  text-white w-[90%]'>What makes us the best:</p>
         </div>
<div className='lg:col-span-2'>
    <p className='text-center font-josh font-[700] text-[19px]  md:text-[35px] xl:text-[40px] text-[#F7AF43]'>Our Design <span className='text-[#ADADAD]'> +</span> <span className='text-[#BD81FA]'>Our Teachers</span></p>
<img src={Tea} />
</div>


      </div>
      </div>
    <img src={Blur2}/>


    <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-10 lg:py-0'>
     <div >
<img src={Design2}/>
     </div>
     <div className='self-center'>
        <p className='font-josh font-[700] text-[#6E6E73] text-[27px] md:text-[30px] lg:text-[40px] xl:text-[45px]'>We have designed our platform <span className='text-[#FFA500]'>for teachers with teachers</span> </p>
        <p className='mt-2 font-josh font-[400] text-[13px] md:text-[15px] lg:text-[17px]  xl:text-[20px]'>We work together to deliver the best experience for future teachers and students, by combining technology using proven learning methods with the feedback we receive from our teacher partners.</p>
        <button className='mt-5 font-josh font-[700] text-[#787878] text-[13px] md:text-[15px] xl:text-[20px] bg-[#FFA500] text-white py-3 px-5 rounded-xl'>Get Started</button>
    
     </div>
    </div>


    <img src={Blur} className='mt-10'/>
    <div className='bg-black' >
    <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-10 lg:py-0 h-full  md:h-[450px] lg:h-[550px] xl:h-[660px] 2xl:h-[850px]'>
    
     <div className='self-center'>
        <p className='font-josh font-[700] text-[#6E6E73] text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]'>Web-based allows for students to access their homework  <span className='text-[#BD81FA]'>wherever-whenever.</span> </p>
        <p className='mt-2 font-josh font-[400] text-[13px] md:text-[15px] lg:text-[17px]  text-white  xl:text-[20px]'>Our mission to deliver the highest quality of literacy training to every student regardless of their skill-level and background. Students should have a frictionless experience when they’d like to practice their reading.</p>
    
     </div>
     <div >
<img src={Book}/>
     </div>
    </div>
      </div>
    <img src={Blur2}/>

    </>
  )
}

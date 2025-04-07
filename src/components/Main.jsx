
import React from 'react'
import Reaction from '../assets/images/icon-reaction.svg'
import Memory from '../assets/images/icon-memory.svg'
import Verbal from '../assets/images/icon-verbal.svg'
import Visual from '../assets/images/icon-visual.svg'



export default function Main() {
   return (
      <div className='font-mono bg-slate-50 h-[50rem] md:h-[24em] md:flex items-center justify-center md:mt-20 md:rounded-4xl shadow'>
         <div className='w-full text-center main flex items-center justify-center flex-col  text-slate-100 md:h-full md:rounded-4xl rounded-b-4xl  '>
            <h1 className='mt-5 mb-10 md:mt-15'>Your Result</h1>
            <div className='num rounded-full  p-10 w-36'>
               <h1 className='text-4xl font-extrabold'>76</h1>
               <p className='text-slate-300 text-[13px]'>of 100</p>
            </div>
            <div className="mt-10 mb-10">

               <h1>Great</h1>
               <p className='md:w-70'>You scored higher than 65% of the people who have taken these test</p>
            </div>
         </div>

         {/* title */}
         <div className='mt-10 text-[14px] flex items-center justify-center flex-col md:w-full'>
            <div className='header -ml-[17em]'>

            <h1 className='mb-3 font-extrabold text-[19px]'>Summary</h1>
            </div>

            <div className='space-y-3 font-extrabold'>
               <div className="p-3 flex items-center justify-between bg-red-100 w-86 rounded-2xl">
                  <div className='flex gap-1'>
                     <img src={Reaction} alt="" />
                     <p className='text-red-500'>Reaction </p>
                  </div>
                  <div>
                     <p>80 / <span className='text-slate-500'>
                        100
                     </span>
                     </p>
                  </div>
               </div>

               <div className=" p-3 flex items-center justify-between bg-yellow-100 w-86 rounded-2xl">
                  <div className='flex gap-1'>
                     <img src={Memory} alt="" />
                     <p className='text-yellow-500'>Memory</p>
                  </div>

                  <div>
                     <p>92 / <span className='text-slate-500'>
                        100
                     </span>
                     </p>
                  </div>
               </div>


               <div className=" p-3 flex items-center justify-between bg-green-100 w-86 rounded-2xl">
                  <div className='flex gap-1'>
                     <img src={Verbal} alt="" />
                     <p className='text-green-500'>Verbal</p>
                  </div>

                  <div>
                     <p>61 / <span className='text-slate-500'>
                        100
                     </span>
                     </p>
                  </div>
               </div>

               <div className=" p-3 flex items-center justify-between bg-blue-100 w-86 rounded-2xl">
                  <div className='flex gap-1'>
                     <img src={Visual} alt="" />
                     <p className='text-blue-500'>Visual</p>
                  </div>
                  <div>
                     <p>73 / <span className='text-slate-500'>
                        100
                     </span>
                     </p>
                  </div>
               </div>

            </div>

            <button className='mt-4 text-slate-50 rounded-full bg-gray-800 w-86 p-3 hover:bg-blue-800 transition-all ease-out'>Continue</button>
         </div>
      </div>
   )
}

import React, { useState, Fragment } from "react";
import Logo from "../svg/logo.svg"
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto'>
       <div className='col-span-1'>
        <img src={Logo} className="-ml-[40px]" />
       </div>
       <div className='hidden lg:flex   col-span-2  self-center'>
        <p className='font-josh font-[400] text-[20px] 2xl:text-[25px] text-black cursor-pointer'>Overview</p>
        <p className='font-josh font-[400] text-[20px] 2xl:text-[25px] text-black mx-10 cursor-pointer'>Features</p>
        <p className='font-josh font-[400] text-[20px] 2xl:text-[25px] text-black cursor-pointer'>Demo</p>
       </div>
       <div className='hidden lg:flex col-span-1 justify-end  self-center'>
       <p className='font-josh font-[400] text-[20px] 2xl:text-[25px] text-black self-center cursor-pointer'>English</p>

       <button className='ml-5 font-josh font-[700] text-[18px] 2xl:text-[25px] text-black border-[1px] border-black py-2 px-5 rounded-xl'>Sign up</button>
       
       </div>

       <div className="flex lg:hidden justify-end  ">
          <svg
            onClick={() => setOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 self-center text-black ml-auto "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div class="container grid grid-cols-1 p-3">
                        <img

                          alt="nothing to show"
                          src={Logo}
                          className="w-[80%]"
                        />
                        <p className="mt-5 font-josh text-[15px] font-[400] hover:font-[700]   cursor-pointer text-black">
                        Overview
                        </p>
                        <p

                          className="mt-5 font-josh text-[15px] font-[400] hover:font-[700]   cursor-pointer text-black"
                        >
                          Features
                        </p>
                        <p className="mt-5 font-josh text-[15px] font-[400] hover:font-[700]   cursor-pointer text-black">
                        Demo
                        </p>

                        <button className='mt-5 font-josh font-[700] text-[16px] text-black border-[1px] border-black py-2 px-5 rounded-xl'>Sign up</button>




                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </>
  )
}

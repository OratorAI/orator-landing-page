import React from "react";
import Logo from "../svg/logo.svg";
import Iconss from "../asset/iconss.png"

export default function Footer() {
  return (
    <>
    <div className="bg-black mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto py-10 border-b-2 border-white">
        <div className="lg:col-span-2">
          <img src={Logo} className="-ml-[45px]" />
        </div>
        <div className="lg:col-span-1">
          <p className="font-josh font-[700] text-[25px] text-white">About</p>
          <p className="font-josh font-[400] text-[18px] text-white">
            Our Vision
          </p>
          <p className="font-josh font-[400] text-[18px] text-white">
            Our Team
          </p>
          <p className="font-josh font-[400] text-[18px] text-white">Careers</p>
          <p className="font-josh font-[400] text-[18px] text-white">Contact</p>
        </div>
        <div className="lg:col-span-1 mt-5 md:mt-0">
        <p className="font-josh font-[700] text-[25px] text-white">Contacts</p>
        <p className="font-josh font-[400] text-[18px] text-white">support@oratorlearning.us</p>

        </div>
      </div>

      <div className="grid md:grid-cols-2 py-5 w-[90%] mx-auto">
      <div className="self-center">
        <p className="font-[400] font-josh text-[18px] text-white">© Orator Inc 2022-2023. All rights reserved</p>
      </div>
      <div >
       <img src={Iconss} className="w-[40%] md:ml-auto mt-5 md:mt-0" />
      </div>
      </div>
      </div>
    </>
  );
}

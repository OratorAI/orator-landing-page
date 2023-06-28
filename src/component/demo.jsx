import React from "react";
import Cre from "../asset/cre.png";
import Graf from "../asset/graf.png";
import High from "../asset/high.png";
import Sml from "../asset/sml.png";
import Thumb from "../asset/thmb.png";
import Scroll from "../asset/scroll.png";

export default function Demo() {
  return (
    <>
      <div>
        <p className="font-josh font-[700] text-[20px] md:text-[50px] text-[#FFA500] text-center">
          Our demo.<span className="text-[#D4D4D4]"> See for yourself.</span>
        </p>

        <p className="mt-2 font-josh font-[400] text-[13px] md:text-[15px] lg:text-[17px]  xl:text-[20px] w-[90%] md:w-[80%] lg:w-[60%] mx-auto ">
          Our platform beta with a full suite of functionalities has already
          been rolled out to participating classrooms. The library, grade-book,
          insights and much more are left out. However, here’s the core of what
          we do:
        </p>

        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
          <p 
          
          className="font-josh font-[700] text-[20px] mt-10">
            1. Choose a title to test
          </p>
          <img src={Cre} className="w-[70%] mx-auto mt-5" />
        </div>

        <div className=" w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
          <p className="font-josh font-[700] text-[20px] mt-5">2. Read</p>

          <div className="relative rounded-xl w-[90%] lg:w-[90%] mx-auto mt-5 border-t-[6px] border-b-[6px] border-l-[4px] border-r-[4px] border-[#201466] py-5">
            <img src={Graf} />

            <p className=" font-josh font-[400] text-[15px] xl:text-[20px] leading-[45px] md:leading-[70px] w-[90%] md:w-[70%] mx-auto">
              Once upon a time, there was a giraffe named Ginger. Ginger lived
              in Kenya, a country in Africa. Like all giraffes, Ginger had a
              long neck and long legs. Because she was so tall, she was able to
              eat food from the very tops of the trees in the savannah.
            </p>
            <img src={High} className="w-[20%] mx-auto"/>
          <img src={Thumb} className="hidden md:block w-[20%] absolute top-[50%] -left-14 " />
          <img src={Scroll} className= "hidden md:block w-[8%] absolute top-[20%] -right-20 " />

          </div>

          <img src={Sml} className="mx-auto" />
          <p className=" font-josh font-[400] text-[14px] xl:text-[17px]  text-center mt-3">Press to start Reading</p>

        </div>
      </div>
    </>
  );
}

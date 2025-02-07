import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" w-[100%]  2xl:w-[1440px]  2xl:h-[484px] m-auto    flex justify-center flex-col items-center">
        <div
          className="w-[95%] h-[80%] 2xl:w-[1320px] sm:border-b-2 sm:border-[#D9D9D9]  flex flex-wrap gap-[30%] md:h-[244px]
      md:relative
       "
        >
          <div className=" flex justify-between flex-col w-[290px] h-[96px] ">
            <h1
              className="text-customblue w-[108px] h-[28px] font-bold  text-[28px] 
              md:text-customblue  md:h-[44px] md:font-bold md:text-[24px] md:flex md:items-center "
            >
              MORENT
            </h1>
            <p className="text-customgray">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          <div
            className=" w-[100%] sm:justify-around h-auto flex flex-wrap justify-between  mt-5 
          
          md:flex
          md:justify-end
          
           md:gap-10
          md:mt-0
          md:w-[550px] 
          md:absolute right-0"
          >
            <div className="h-[244px] w-[152px] flex  justify-around flex-col mb-5 md:mb-0">
              <h1 className="h-11 font-semibold font-sans text-xl ">About</h1>
              <Link className="text-customgray" href={"#"}>How it Works</Link>
              <Link className="text-customgray" href={"#"}>Featured</Link>
              <Link className="text-customgray" href={"#"}>Partnerships</Link>
              <Link className="text-customgray" href={"#"}>Business Relations</Link>
            </div>

            <div className="h-[244px] w-[152px] flex justify-around flex-col">
              <h1 className="h-11 font-semibold font-sans text-xl">Community</h1>
              <Link className="text-customgray" href={"#"}>Events</Link>
              <Link className="text-customgray" href={"#"}>Blog</Link>
              <Link className="text-customgray" href={"#"}>Podcast</Link>
              <Link className="text-customgray" href={"#"}>Invite Friend</Link>
            </div>

            <div className="h-[244px] w-[152px]  flex justify-around flex-col">
              <h1 className="h-11 font-semibold font-sans text-xl">Socials</h1>
              <Link className="text-customgray" href={"#"}>Discord</Link>
              <Link className="text-customgray" href={"#"}>Instagram</Link>
              <Link className="text-customgray" href={"#"}>Twitter</Link>
              <Link className="text-customgray" href={"#"}>Facebook</Link>
            </div>
          </div>
        </div>

        <div className="2xl:w-[1340px]   h-[100px] w-[95%] md:h-[110px] flex justify-between flex-col md:flex-row  md:flex md:justify-between  md:items-center ">

          <h1 className="  h-6 w-fit text-xl relative top-16 md:relative md:top-0 ">
            ©2022 MORENT. All rights reserved
          </h1>
          <div className=" w-[100%] md:w-[40%] flex justify-between   relative bottom-16 md:relative md:bottom-0 ">
          <Link className="text-xl" href={"#"}>Privacy & Policy</Link>
          <Link className="text-xl" href={"#"}>Terms & Condition</Link>

             </div>
          
        </div>
      </div>
    </>
  );
}

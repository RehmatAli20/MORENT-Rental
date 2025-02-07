"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
export default function Board() {
  return (
    <div className="h-[900px] w-[286px] bg-[#ffffff] flex flex-col justify-between p-5">
      <div className="w-[220px] h-[644px] flex justify-around flex-col">
        <p className="text-customgray opacity-85 relative left-5">MAIN MENU</p>
        <div className="w-[132px] h-[346px] ">
          <Link
            href={"#"}
            className="text-customgray hover:text-[#BADDFA] text-lg w-[254px] h-[56px] hover:bg-customblue  p-2 gap-3 rounded-[10px] flex items-center"
          >
            <Image
              src={"/dashboard/home.png"}
              className=" relative bottom-[3px]"
              alt="icon"
              width={24}
              height={24}
            ></Image>
            Dashboard
          </Link>

          <Link
            href={"#"}
            className="text-customgray     w-[254px] h-[56px] hover:bg-customblue  p-2 gap-3 rounded-[10px] flex items-center      hover:text-[#BADDFA]
 text-lg"
          >
            <Image
              src={"/dashboard/car.png"}
              className=" relative bottom-[3px]"
              alt="icon"
              width={24}
              height={24}
            ></Image>
            Car Rent
          </Link>

          <Link
            href={"#"}
            className="text-customgray    w-[254px] h-[56px] hover:bg-customblue  p-2 gap-3 rounded-[10px] flex items-center        hover:text-[#BADDFA]
 text-lg"
          >
            <Image
              src={"/dashboard/chart.png"}
              className=" relative bottom-[3px]"
              alt="icon"
              width={24}
              height={24}
            ></Image>
            Insight
          </Link>

          <Link
            href={"#"}
            className="text-customgray hover:text-[#BADDFA]
                                text-lg w-[254px] h-[56px] hover:bg-customblue  p-2 gap-3 rounded-[10px] flex items-center"
          >
            <Image
              src={"/dashboard/wallet.png"}
              className=" relative bottom-[3px]"
              alt="icon"
              width={24}
              height={24}
            ></Image>
            Reimburse
          </Link>

          <Link
            href={"#"}
            className="text-customgray hover:text-[#BADDFA] w-[254px] h-[56px] hover:bg-customblue  p-2 gap-3 rounded-[10px] flex items-center
                   text-lg"
          >
            <Image
              src={"/dashboard/message.png"}
              className=" relative bottom-[1px]"
              alt="icon"
              width={24}
              height={24}
            ></Image>
            Inbox
          </Link>

          <Link
            href={"#"}
            className="text-customgray hover:text-[#BADDFA] text-lg 
             w-[254px] h-[56px] hover:bg-customblue  p-2 gap-3 rounded-[10px] flex items-center"
          >
            <Image
              src={"/dashboard/calendar.png"}
              className=" relative bottom-[3px]"
              alt="icon"
              width={24}
              height={24}
            ></Image>
            Calender
          </Link>
        </div>

        <div className="w-[100%]  h-[198px]">
          <p className="text-customgray opacity-85 relative ">PREFERENCES</p>

          <Link
            href={"#"}
            className="text-customgray hover:text-[#BADDFA] text-lg
             w-[254px] h-[56px] hover:bg-customblue  p-2 gap-3 rounded-[10px] flex items-center
             "
          >
            <Image
              src={"/dashboard/setting.png"}
              className=" relative bottom-[1px]"
              alt="icon"
              width={24}
              height={24}
            ></Image>
            Settings
          </Link>

          <Link
            href={"#"}
            className="text-customgray hover:text-[#BADDFA] text-lg 
             w-[254px] h-[56px] hover:bg-customblue  p-2 gap-3 rounded-[10px] flex items-center"
          >
            <Image
              src={"/dashboard/info-circle.png"}
              className="relative bottom-[1px]"
              alt="icon"
              width={24}
              height={24}
            ></Image>
            Help & Center
          </Link>

          <Link
            href={"#"}
            className="text-customgray hover:text-[#BADDFA] text-lg
             w-[254px] h-[56px] hover:bg-customblue  p-2 gap-3 rounded-[10px] flex items-center
             "
          >
            <Image
              src={"/dashboard/briefcase.png"}
              className=" relative bottom-[1px]"
              alt="icon"
              width={24}
              height={24}
            ></Image>
            Dark Mode
          </Link>
        </div>
      </div>

      <div className="w-[90%] m-auto h-[40px] relative top-[70px] items-center flex ">
        <Link
          href={"#"}
          className="text-customgray  gap-3 flex text-md
    
             "
        >
          <Image
            src={"/dashboard/logout.png"}
            className=" relative bottom-[1px]"
            alt="icon"
            width={26}
            height={26}
          ></Image>
          <SignOutButton></SignOutButton>
        </Link>
      </div>
    </div>
  );
}

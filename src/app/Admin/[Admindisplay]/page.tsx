"use client";
import React from "react";
import Board from "../Board";
import Image from "next/image";
import Drop from "../Drop";
import Pick from "../Pick";
import {  useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const price = searchParams.get("price");
  const types = searchParams.get("types");
  return (
    <div className=" bg-[#F6F7F9] m-auto 2xl:w-[1440px] flex-col md:flex-row items-center justify-between flex  lg:pr-2 lg:gap-3  ">
      <div className="hidden md:block">
        <Board></Board>
      </div>

      <div className="2xl:w-[534px]  w-[327px]  mt-5 md:mt-0  md:w-[40%] h-auto lg:h-[800px] bg-[#ffffff] rounded-[10px]">
        <h1 className="h-[50px] mb-1 w-[98%] m-auto text-lg font-semibold flex items-center ">
          Details Rental
        </h1>
        <div className="w-[95%] m-auto h-[272px] mb-3 mt-3 ">
          <Image
            src={"/dashboard/Maps.png"}
            alt="image"
            width={295}
            height={272}
            className="2xl:w-[486px] md:w-[96%] m-auto"
          ></Image>
        </div>

        <div className="w-[95%] m-auto flex mb-3  gap-5">
          <div className="w-[138px] h-[72px]  rounded-[10px] flex justify-center items-center ">
            <Image src={`${image}`} alt="image" width={116} height={36}></Image>
          </div>
          <div className="w-[50%] h-[72px] flex flex-col justify-around ">
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-customgray">{types}</p>
          </div>
          <p className="text-customgray relative md:left-4 top-3">#9761</p>
        </div>

        <div className="bg-[#ffffff] h-auto gap-y-4 w-[95%] m-auto items-center flex flex-col">
          <Pick></Pick>
          <Drop></Drop>

          <div className="  w-[100%]  flex justify-between mt-1 items-center m-auto mb-4 h-[50px] ">
            <div className=" flex flex-col ">
              <h1 className=" lg:text-2xl text-md font-semibold">
                Total Rental Price
              </h1>
              <p className="text-customgray ">Overall price </p>
            </div>
            <h1 className="lg:text-2xl  text-lg h-[48px]  flex items-center font-semibold">
              {price}
            </h1>
          </div>
        </div>
      </div>

      <div className="2xl:w-[534px]  w-[327px] mt-3 mb-6 lg:mb-0  md:w-[40%] h-auto 2xl:h-[800px] bg-[#ffffff] rounded-[10px]">
        <div className="2xl:w-[524px] w-[97%]  h-auto lg:h-[324px]  flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:place-items-center  m-auto mb-5">
          <div className="h-[24px] w-[97%] 2xl:w-[476px] mt-2 col-span-2 m-auto flex justify-between ">
            <h1 className="text-lg font-semibold">Top 5 Car Rental </h1>
            <div className="h-[24px] w-[24px]  flex flex-col items-center ">
              <Image
                src={"/dashboard/more.png"}
                alt="icon"
                width={24}
                height={24}
              ></Image>
            </div>
          </div>

          <div className="lg:w-[220px] w-[295px]  lg:h-[220px] mb-4 lg:mb-0 mt-4 lg:mt-0 flex justify-center items-center  relative">
            <Image
              src={"/dashboard/ch.png"}
              alt="icon"
              width={200}
              height={200}
            />
            <div className="w-[100px] h-[63px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] flex justify-center flex-col items-center">
              <h1 className="text-lg font-semibold">72,030</h1>
              <p className="text-customgray">Rental Car</p>
            </div>
          </div>

          <ul className="list-disc  w-[295px] h-[184px] lg:w-[220px] flex justify-around  flex-col lg:h-[220px] pl-5">
            <div className="flex justify-between items-center  w-[100%] h-[24px]">
              <li className="[&::marker]:text-[#0D3559] h-[24px] [&::marker]:text-5xl relative bottom-[14px]  left-4"></li>
              <h1 className="text-customgray w-[100px] relative lg:right-3 right-11 ">
                Sport Car
              </h1>
              <p className="h-[24px] w-[72px] relative left-3  ">17,439</p>
            </div>

            <div className="flex justify-between items-center w-[100%] h-[24px]">
              <li className="[&::marker]:text-[#175D9C]  h-[24px]  [&::marker]:text-5xl relative bottom-[14px] left-4"></li>
              <h1 className="text-customgray relative lg:right-10 right-20">
                SUV
              </h1>
              <p className="h-[24px] w-[72px]  relative left-3 ">9,478</p>
            </div>

            <div className="flex justify-between items-center w-[100%] h-[24px]">
              <li className="[&::marker]:text-[#2185DE]   h-[24px]  [&::marker]:text-5xl relative bottom-[14px] left-4"></li>
              <h1 className="text-customgray relative lg:right-10 right-[73px]">
                Coupe
              </h1>
              <p className="h-[24px] w-[72px] relative left-3">18,197</p>
            </div>

            <div className="flex justify-between items-center w-[100%] h-[24px]">
              <li className="[&::marker]:text-[#63A9E8]  h-[24px]  [&::marker]:text-5xl relative bottom-[14px] left-4"></li>
              <h1 className="text-customgray relative lg:right-6 right-[60px]">
                Hatchback
              </h1>
              <p className="h-[24px] w-[72px] relative left-3">12,510</p>
            </div>

            <div className="flex justify-between items-center w-[100%] h-[24px]">
              <li className="[&::marker]:text-[#A6CEF2]  [&::marker]:text-5xl relative bottom-1 left-4 "></li>
              <h1 className="text-customgray relative lg:right-10 right-20">
                MPV
              </h1>
              <p className="h-[24px] w-[72px] relative left-3 ">14,406</p>
            </div>
          </ul>
        </div>

        <div className="2xl:w-[524px] w-[327px] md:w-[97%] h-[485px] flex gap-3 flex-col m-auto ">
          <div className="2xl:w-[476px] w-[97%] m-auto h-[30px] flex justify-between   items-center">
            <h1 className="text-xl   font-semibold">Recent Transaction</h1>
            <button className="text-customblue w-[68px] h-[24px]  flex items-center justify-center">
              View All
            </button>
          </div>
          <div className="2xl:w-[476px] w-[97%] h-[376px]  flex m-auto flex-col ">
            <div className="w-[100%] m-auto  flex    h-[100px] items-center border-b-[2px] border-[#91A3BF] gap-5">
              <div className="w-[138px]  h-[72px]  rounded-[10px] flex justify-center items-center ">
                <Image
                  src={`${image}`}
                  alt="image"
                  width={116}
                  height={36}
                ></Image>
              </div>
              <div className="w-[80%] h-[72px] flex  justify-between ">
                <div>
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p className="text-customgray">{types}</p>
                </div>
                <div className="h-[100%] flex flex-col items-center">
                  <p className="text-customgray">20 July</p>
                  <h1 className="font-semibold text-lg">{price}</h1>
                </div>
              </div>
            </div>

            <div className="w-[100%] m-auto  flex    h-[100px] items-center border-b-[2px] border-[#91A3BF] gap-5">
              <div className="w-[138px]  h-[72px]  rounded-[10px] flex justify-center items-center ">
                <Image
                  src={`${image}`}
                  alt="image"
                  width={116}
                  height={36}
                ></Image>
              </div>
              <div className="w-[80%] h-[72px] flex  justify-between ">
                <div>
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p className="text-customgray">{types}</p>
                </div>
                <div className="h-[100%] flex flex-col items-center">
                  <p className="text-customgray">20 July</p>
                  <h1 className="font-semibold text-lg">{price}</h1>
                </div>
              </div>
            </div>
            <div className="w-[100%] m-auto  flex    h-[100px] items-center border-b-[2px] border-[#91A3BF] gap-5">
              <div className="w-[138px]  h-[72px]e rounded-[10px] flex justify-center items-center ">
                <Image
                  src={`${image}`}
                  alt="image"
                  width={116}
                  height={36}
                ></Image>
              </div>
              <div className="w-[80%] h-[72px] flex  justify-between ">
                <div>
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p className="text-customgray">{types}</p>
                </div>
                <div className="h-[100%] flex flex-col items-center">
                  <p className="text-customgray">20 July</p>
                  <h1 className="font-semibold text-lg">{price}</h1>
                </div>
              </div>
            </div>
            <div className="w-[100%] m-auto  flex    h-[100px] items-center  border-[#91A3BF] gap-5">
              <div className="w-[138px]  h-[72px] rounded-[10px] flex justify-center items-center ">
                <Image
                  src={`${image}`}
                  alt="image"
                  width={116}
                  height={36}
                ></Image>
              </div>
              <div className="w-[80%] h-[72px] flex  justify-between ">
                <div>
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p className="text-customgray">{types}</p>
                </div>
                <div className="h-[100%] flex flex-col items-center">
                  <p className="text-customgray">20 July</p>
                  <h1 className="font-semibold text-lg">{price}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

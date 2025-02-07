"use client";
import React from "react";
import Image from "next/image";
import PyForm from "../PyForm";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const price = searchParams.get("price");
  const fule = searchParams.get("fule");
  const person = searchParams.get("Person");
  const types = searchParams.get("types");
  return (
    <div className="2xl:w-[1440px] lg:flex flex flex-col-reverse mb-48 bg-[#F6F7F9] justify-center lg:justify-around lg:flex-row gap-4 p-1 m-auto ">
      <Link  className="hidden"
        href={{  
          pathname: `/Pyform`,
          query: {  name, image, price, fule, person, types, },
        }}
      > </Link>

      <PyForm></PyForm>
      <div className="2xl:w-[490px]  w-[327px] h-[424px] mt-4 md:mt-0 md:w-[82%] lg:w-[35%] md:h-[560px] rounded-[10px] m-auto lg:m-0 bg-[#ffffff] flex flex-col justify-around">
        <div className="h-[76px] w-[95%] m-auto ">
          <h1 className="w-[200px] h-[24px] text-lg font-semibold">
            Rental Summary
          </h1>
          <p className="text-customgray">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </div>

        <div className="w-[95%] h-[112px] m-auto flex gap-4 items-center">
          <div className="bg-customblue  rounded-[8px] h-[108px] w-[132px] flex justify-center items-center">
            <Image src={`${image}`} alt="car  " width={116} height={36}></Image>
          </div>

          <div className="md:h-[72px] h-auto w-[220px] md:w-[60%] flex  justify-around  flex-col  ">
            <h1 className="text-[24px] font-semibold">{name}</h1>
            <div className="w-[100%] h-auto md:h-[32px] gap-3 lg:flex  lg:flex-row flex flex-col">
              <div className="h-[20px] w-[108px]">
                <Image
                  src={"/Payment/Review Star.png"}
                  alt="review"
                  height={16}
                  width={108}
                ></Image>
              </div>
              <p className="text-customgray">440+ Reviewer</p>
            </div>
          </div>
        </div>

        <div className="w-[95%] h-[20px]  m-auto flex items-center  px-2 justify-between">
          <p className="text-customgray">Subtotal</p>
          <p className="text-md font-semibold ">{price}</p>
        </div>

        <div className="w-[95%] h-[20px]  m-auto flex items-center mt-[20px] px-2 justify-between">
          <p className="text-customgray">Tax</p>
          <p className="text-md font-semibold ">$ 0</p>
        </div>

        <div className="md:h-[56px] h-[40px] w-[90%] 2xl:w-[444px]  rounded-[10px] flex bg-[#eaebee] justify-around m-auto ">
          <input
            type="text"
            className="text-customgray bg-[#eaebee] outline-none"
            placeholder="Apply promo code"
          />
          <button className="w-[130px] justify-center items-center  text-lg font-semibold flex ">
            Applay Now
          </button>
        </div>

        <div className=" 2xl:w-[444px] w-[90%] h-[40px] md:h-[48px] flex  m-auto items-center  justify-between">
          <div className=" w-[90%] 2xl:w-[284px] h-[48px] ">
            <p className="text-lg font-semibold">Total Rental Price</p>
            <p className="text-customgray   text-[12px] md:text-sm">
              Overall price and rental discount
            </p>
          </div>
          <h1 className="h-[48px] w-[128px] flex justify-center items-center text-2xl font-bold ">
            {price}
          </h1>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import FilterSidebar from "@/app/component/FilterSidebar";
import UpdatedSwiper from "./UpdatedSwiper";
import Link from "next/link";

export default function CarDetailsPage() {
  const searchParams = useSearchParams();

  // Retrieve car details from query params
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const price = searchParams.get("price");
  const fuel = searchParams.get("fuel");
  const person = searchParams.get("person");
  const type = searchParams.get("type");
  // const logo = searchParams.get("logo");
  const transmission =searchParams.get("transmission")

  return (
    <div className=" flex 2xl:w-[1440px] bg-[#F6F7F9]  m-auto gap-5 mb-7">
      <FilterSidebar cars={[]} onFilterChange={function (filter: string): void {
        throw new Error("Function not implemented.");
      } }></FilterSidebar>

      <div className="h-auto w-[100%]  2xl:w-[1016px]  mt-4">
        <div
          className=" flex flex-col
          w-[100%]  h-auto sm:flex   sm:flex-row items-center  justify-center  gap-12"
        >
          <div
            className=" w-[327px] h-[318px] md:w-[45%] 
            md:h-[508px] lg:w-[492px]  flex justify-around items-center flex-col"
          >
            <div
              className=" w-[327px] h-[232px] md:w-[80%] 
               lg:w-[492px] md:h-[336px] bg-customblue rounded-[10px] flex flex-col justify-around"
            >
              <div
                className="h-[120px] w-[240px]
                    lg:h-[160px] flex flex-col justify-between  lg:w-[327px] ml-3 "
              >
                <h1 className="md:text-[30px] text-[20px] md:w-[327px] text-white">
                  Sports car with the best design and acceleration
                </h1>
                <p className="md:w-[327px] text-white">
                  Safety and comfort while driving a futuristic and elegant
                  sports car
                </p>
              </div>
              <div className=" w-[100%]   md:h-[120px] flex justify-center">
                <Image
                  className="md:w-[320px]"
                  src={`${image}`}
                  alt="car  "
                  width={190}
                  height={60}
                ></Image>
              </div>
            </div>

            <div className="w-[100%] h-[64px] md:h-[124px] flex justify-between md:flex md:justify-around lg:flex lg:justify-between ">
              <div
                className=" w-[96px] h-[64px]
                                   md:h-[124px] md:w-[148px]
                                    bg-customblue flex justify-center items-center rounded-[8px]"
              >
                <Image
                  src={`${image}`}
                  alt="car  "
                  width={116}
                  height={36}
                ></Image>
              </div>

              <div
                className=" w-[96px] h-[64px]
                                   md:h-[124px] md:w-[148px]"
              >
                <Image
                  className=" w-[96px] h-[64px]
                                   md:h-[124px] md:w-[148px]"
                  src={"/icon/View.png"}
                  alt="image"
                  width={148}
                  height={124}
                ></Image>
              </div>

              <div
                className=" w-[96px] h-[64px]
                                   md:h-[124px] md:w-[148px]"
              >
                <Image
                  className=" w-[96px] h-[64px]
                                   md:h-[124px] md:w-[148px]"
                  src={"/icon/View1.png"}
                  alt="image"
                  width={148}
                  height={124}
                ></Image>
              </div>
            </div>
          </div>

          <div
            className="w-[327px] h-[318px] md:w-[45%] 
          lg:w-[492px] md:h-[508px] bg-[#ffffff]  shadow-lg rounded-[10px] flex flex-col justify-evenly"
          >
            <div
              className="w-[295px] h-[46px] md:w-[90%]
           lg:h-[70px] lg:w-[444px] m-auto  flex justify-between"
            >
              <div className="md:h-[70px] h-[46px] w-[220px] flex flex-col  justify-around ">
                <h1 className="   font-bold md:text-[20px] text-[16px]  w-[172px] md:w-[220px]">
                  {name}
                </h1>
                <Image
                  className="md:h-[24px] md:w-[200px]"
                  src={"/icon/Reviews.png"}
                  alt="Reviews"
                  width={172}
                  height={16}
                ></Image>
              </div>
              <div className="mr-4 mt-1 w-6 h-6">
                <Image
                  src={"/icon/heart.png"}
                  alt="logo"
                  width={24}
                  height={20}
                ></Image>
              </div>
            </div>

            <div
              className="w-[295px] h-[72px] md:w-[90%]
               lg:w-[444px] lg:h-[120px] m-auto"
            >
              <p className="  md:leading-[200%] leading-[120%] tracking-[-2%] text-[16px] md:text-[20px] text-customgray">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </p>
            </div>

            <div
              className="md:w-[90%] w-[295px] h-[48px]
                   lg:w-[444px] md:h-[72px] m-auto  gap-11 flex"
            >
              <div className="w-[200px]  h-[48px] md:h-[72px]  flex flex-col justify-between">
                <div className="w-[100%] h-[28px] flex justify-between">
                  <h1 className="text-customgray  ">Type</h1>
                  <h1>{type}</h1>
                </div>
                <div className="w-[100%] h-[28px] flex justify-between">
                  <h1 className="text-customgray">Steering</h1>
                  <h1>{transmission}</h1>
                </div>
              </div>

              <div className="w-[210px] h-[48px] md:h-[72px]  flex flex-col justify-between">
                <div className="w-[100%] h-[28px] flex justify-between">
                  <h1 className="text-customgray">Capacity</h1>
                  <h1>{person}</h1>
                </div>
                <div className="w-[100%] h-[28px] flex justify-between">
                  <h1 className="text-customgray">Gasoline</h1>
                  <h1>{fuel}</h1>
                </div>
              </div>
            </div>

            <div className="w-[295px] md:w-[90%] lg:w-[444px]   md:h-[72px]  m-auto flex justify-between items-center">
              <div className="h-[56px] w-[200px] ml-3">
                <h1 className="flex  text-[24px] font-bold">
                  {price}/
                  <p className="text-customgray font-normal text-[16px] mt-2">
                    
                    day
                  </p>
                </h1>
                <p className="text-customgray line-through">$100.00</p>
              </div>

              <button className="bg-customblue w-[140px] h-[56px] mr-3 rounded-md text-white">
                <Link
                  href={{
                    pathname: "/Payment/Confirm",
                    query: { name, image, price, person, fuel, type },
                  }}
                >
                  Rent Now
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[327px] sm:w-[95%] m-auto bg-[#ffff] rounded-[16px] 2xl:w-[1016px] mt-5 mb-5 ">
          <div className="w-[100%] m-auto h-[28px] relative top-[18px] ">
            <h1 className="w-[136px] h-[28px] ml-4 flex justify-around text-[20px] items-center">
              Reviews{" "}
              <p className="font-normal h-[25px] w-[40px] bg-customblue flex justify-center items-center rounded-[6px] text-white">
                13
              </p>{" "}
            </h1>
          </div>

          <div className="lg:h-[124px] w-[100%]  flex justify-between flex-col mt-[30px] mb-8 h-auto">
            <div className="lg:h-[56px]  h-auto  flex justify-between ">
              <div className="w-[300px] flex h-[56px] ml-4  items-center">
                <div className="w-[56px] h-[56px] flex items-center">
                  <Image
                    src={"/icon/Profil.png"}
                    alt="profile"
                    width={56}
                    height={56}
                  ></Image>
                </div>
                <div className="ml-4 h-[56px] flex flex-col justify-between">
                  <h1 className="font-bold">Alex Stanton</h1>
                  <p className="text-customgray">CEO at Bukalapak</p>
                </div>
              </div>
              <div className="lg:h-[56px] h-auto w-[128px] ">
                <p className="text-customgray ml-5">21 July 2022</p>

                <Image
                  className="ml-1"
                  src={"/icon/Reviews (1).png"}
                  alt="profile"
                  width={108}
                  height={20}
                ></Image>
              </div>
            </div>
            <p className="w-[84%] m-auto text-customgray">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </p>
          </div>

          <div className="lg:h-[124px] w-[100%]  flex justify-between flex-col h-auto">
            <div className="lg:h-[56px]  h-auto  flex justify-between ">
              <div className="w-[300px] flex h-[56px] ml-4  items-center">
                <div className="w-[56px] h-[56px] flex items-center">
                  <Image
                    src={"/icon/Profil.png"}
                    alt="profile"
                    width={56}
                    height={56}
                  ></Image>
                </div>
                <div className="ml-4 h-[56px] flex flex-col justify-between">
                  <h1 className="font-bold">Skylar Dias</h1>
                  <p className="text-customgray">CEO at Amazon</p>
                </div>
              </div>
              <div className="lg:h-[56px] h-auto w-[128px] ">
                <p className="text-customgray ml-5">21 July 2022</p>

                <Image
                  className="ml-1"
                  src={"/icon/Reviews (1).png"}
                  alt="profile"
                  width={108}
                  height={20}
                ></Image>
              </div>
            </div>
            <p className="w-[84%] m-auto text-customgray">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </p>
          </div>

          <button className="w-[132px] h-[44px] m-auto mt-6 mb-6 text-customgray flex justify-center items-center ">
            {" "}
            Show All{" "}
            <div className="w-6 h-6">
              <Image
                className=" ml-1"
                src={"/icon/arrowdown.png"}
                alt="arrow "
                width={20}
                height={20}
              ></Image>
            </div>{" "}
          </button>
        </div>

        <div className="w-[97%] m-auto flex justify-center h-auto md:h-auto ">
          <UpdatedSwiper></UpdatedSwiper>
        </div>
      </div>
    </div>
  );
}

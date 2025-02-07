"use client";
import Image from "next/image";
// import SwiperSlider from "./component/Slidercomponent";
import Slidercomponent from "./component/Slidercomponent";
import Recomended from "./component/Recomended";
import Pick from "./component/Pick";
import Drop from "./component/Drop";
export default function Home() {
  return (
    <>
      <div className=" flex "> 
        <div className="2xl:w-[1440px] m-auto h-auto w-[100%] mb-4 mt-0 bg-[#F6F7F9]">
          <div className="w-[95%] h-[360px] sm:h-[300px] lg:h-[360px] flex m-auto justify-center items-center gap-[20px]">
            <div
              className=" flex flex-col justify-between  w-[100%] h-[100%] bg-[#59A3F4] sm:flex sm:items-center sm:justify-around sm:flex-col rounded-[10px]
         md:w-[80%] md:h-[80%] lg:w-[50%]  lg:h-[62%] xl:w-[630px]  lg:flex  lg:justify-normal lg:items-start xl:h-[330px]
        "
            >
              <div className=" ml-4 mt-0 xl:w-[200px]  h-[50%] xl:h-[244px]   flex flex-col justify-around  ">
                <h1 className="xl:h-[30px] font-semibold text-[20px] text-customwhite">
                  The Best Platform for Car Rental
                </h1>
                <p className="text-white w-[300px]">
                  Ease of doing a car rental safely and reliably. Of course at a
                  low price.
                </p>
                <button className="text-customwhite h-[44px] w-[120px] bg-customblue rounded-[5px]">
                  Rental Car
                </button>
              </div>
              <div className=" xl:h-[116px] xl:w-[306px] m-auto sm:m-0 lg:relative lg:left-[200px] lg:bottom-[30px] xl:relative xl:left-[200px] xl:bottom-[1px] ">
                <Image
                  src={"/card/car.png"}
                  alt="car"
                  width={270}
                  height={106}
                ></Image>
              </div>
            </div>

            <div
              className=" lg:w-[50%]
        xl:w-[630px]  hidden lg:block xl:h-[330px] bg-customblue rounded-[10px]"
            >
              <div className=" ml-4 mt-4 xl:w-[200px] xl:h-[244px]  flex flex-col justify-around ">
                <h1 className="xl:h-[30px] font-semibold text-[20px] text-customwhite">
                  Easy way to rent a car at a low price
                </h1>
                <p className="text-white w-[300px]">
                  Providing cheap car rental services and safe and comfortable
                  facilities.
                </p>
                
                <button className="text-customwhite h-[44px] w-[120px] bg-[#59A3F4] rounded-[5px]">
                  Rental Car
                </button>
              </div>
              <div className=" xl:h-[116px] xl:w-[306px] relative left-[200px] bottom-[30px]">
                <Image
                  src={"/card/car (1).png"}
                  alt="car"
                  width={270}
                  height={106}
                ></Image>
              </div>
            </div>
          </div>

          <div className=" h-auto p-5 xl:h-[162px]  m-8 md:m-1 flex justify-center items-center flex-col  sm:flex sm:items-center sm:justify-around sm:flex-wrap">
            <Pick />
            <div className="h-[60px]  flex justify-center xl:w-[60px] w-[100%] m-[30px] ">
              <button className="h-[60px] w-[60px] bg-customblue rounded-[5px] flex justify-center items-center">
                <Image
                  src={"/icon/Swap.png"}
                  alt="updwon"
                  width={24}
                  height={24}
                ></Image>
              </button>
            </div>
            <Drop />
          </div>

          <Slidercomponent />
          <Recomended />
        </div>
      </div>
    </>
  );
}

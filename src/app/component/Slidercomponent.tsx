"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";
const client = createClient({
  projectId: "pl2mz7pz",
  dataset: "production",
  apiVersion: "v2025-01-27",
  useCdn: true,
});

interface Car {
  _id: string;
  name: string;
  type: string;
  transmission: string;
  seatingCapacity: string;
  fuelCapacity: string;
  pricePerDay: string;
  imageUrl?: string;
}

const SliderComponent: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  // Function to fetch car data from Sanity
  const fetchCarData = async () => {
    try {
      // Sanity query to fetch car data
      const query = `
            *[_type == "car"]{
              _id,
              name,
              type,
              pricePerDay,
              transmission,
              fuelCapacity,
              seatingCapacity,
              "imageUrl": image.asset->url,
              
            }
          `;

      // Fetch data from Sanity
      const data: Car[] = await client.fetch(query);
      // Update state with fetched car data
      setCars(data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  // Fetch car data on component mount
  useEffect(() => {
    fetchCarData();
  }, []);
  return (
    <div className="2xl:w-[1440px] md:w-[98%] m-auto mt-8">
      {/* Desktop View */}
      <div className="w-[98%]  bg-transparent m-auto h-[44px] hidden  lg:flex justify-between items-center ">
        <p className="text-customgray text-[24px] ml-4 ">Popular Car</p>
        <button className="text-customblue text-[24px] mr-4">View All</button>
      </div>

      <div className="hidden lg:flex justify-around gap-6 p-4">
        {cars.slice(0, 4).map((car) => (
          <div
            key={car._id}
            className="h-[388px] w-[304px]  shadow-lg rounded-lg bg-white
             flex flex-col   items-center
            "
          >
            <div className="w-[90%] m-auto mt-5 h-[20%] flex justify-between  ">
              <div>
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-customgray">{car.type}</p>
              </div>
              <div>
                <Image
                  src={"/icon/heart.png"}
                  alt="image"
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
            <div className=" w-[100%] h-[64px] flex justify-center relative bottom-9">
              <Image
                src={`${car.imageUrl}`}
                alt="car"
                width={204}
                height={64}
              ></Image>
            </div>
            <div className="w-[95%] h-[30%]  flex justify-evenly flex-col">
              <div className="w-[100%] h-[24px]  flex gap-8">
                <div className=" w-[58px] h-[24px] flex gap-2">
                  <Image
                    src={"/icon/gas.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-customgray">{car.fuelCapacity}</p>
                </div>

                <div className=" w-[58px] h-[24px] flex gap-1">
                  <Image
                    src={"/icon/circle.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-customgray">{car.transmission}</p>
                </div>

                <div className=" w-[100px]  h-[24px]  flex gap-1">
                  <Image
                    src={"/icon/profile.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="text-customgray">{car.seatingCapacity}</p>
                </div>
              </div>

              <div className="w-[100%] h-[60px]  flex justify-evenly items-center">
                <div className="w-[116px] h-[44px]  flex justify-center items-center">
                  <p>{car.pricePerDay}/</p>
                  <p className="text-customgray">day</p>
                </div>
                <Link
                  href={{
                    pathname: `Category/${car._id}`,
                    query: {
                      name: car.name,
                      image: car.imageUrl,
                      type: car.type,
                      person: car.seatingCapacity,
                      price: car.pricePerDay,
                      fuel: car.fuelCapacity,
                      transmission: car.transmission,
                    },
                  }}
                >
                  <button className="w-[116px] h-[44px] bg-customblue rounded-[4px] text-customwhite">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.2} // Show a part of the next card for better visibility
          loop={true}
        >
          {cars.map((car) => (
            <SwiperSlide key={car._id}>
              <div
                // key={car.id}
                className=" h-[286px] sm:h-[400px] sm:w-[85%]  w-[270px] mx-auto  mt-4 mb-4  shadow-lg rounded-lg bg-white
             flex flex-col   items-center"
              >
                <div className="w-[90%] m-auto mt-5 h-[20%] flex justify-between ">
                  <div>
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <p className="text-customgray">{car.type}</p>
                  </div>
                  <div>
                    <Image
                      src={"/icon/heart.png"}
                      alt="image"
                      width={20}
                      height={20}
                    ></Image>
                  </div>
                </div>
                <div className=" w-[100%] h-[64px] flex justify-center relative bottom-9">
                  <Image
                    src={`${car.imageUrl}`}
                    alt="car"
                    width={204}
                    height={64}
                  ></Image>
                </div>
                <div className="w-[95%] h-[30%] flex justify-evenly flex-col">
                  <div className="w-[100%] h-[24px] flex justify-evenly gap-8">
                    <div className=" w-[58px] h-[24px] flex gap-2">
                      <Image
                        className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                        src={"/icon/gas.png"}
                        alt="icon"
                        width={24}
                        height={24}
                      ></Image>
                      <p className="text-customgray text-[10px] sm:text-[16px]">
                        {car.fuelCapacity}
                      </p>
                    </div>

                    <div className=" w-[58px] h-[24px] flex gap-1">
                      <Image
                        className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                        src={"/icon/circle.png"}
                        alt="icon"
                        width={24}
                        height={24}
                      ></Image>
                      <p className="text-customgray text-[10px] sm:text-[16px]">
                        {car.transmission}
                      </p>
                    </div>

                    <div className=" w-[58px] h-[24px] flex gap-1">
                      <Image
                        className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                        src={"/icon/profile.png"}
                        alt="icon"
                        width={24}
                        height={24}
                      ></Image>
                      <p className="text-customgray text-[10px] sm:text-[16px]">
                        {car.seatingCapacity}
                      </p>
                    </div>
                  </div>

                  <div className="w-[100%] h-[60px] flex justify-evenly items-center">
                    <div className="w-[116px] h-[44px]  flex justify-center  items-center">
                      <p>{car.pricePerDay}/</p>
                      <p className="text-customgray">day</p>
                    </div>
                    <Link
                      href={{
                        pathname: `Category/${car._id}`,
                        query: {
                          name: car.name,
                          image: car.imageUrl,
                          type: car.type,
                          person: car.seatingCapacity,
                          price: car.pricePerDay,
                          fuel: car.fuelCapacity,
                          transmission: car.transmission,
                        },
                      }}
                    >
                      <button className="w-[116px] h-[44px] bg-customblue rounded-[4px] text-customwhite">
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default SliderComponent;

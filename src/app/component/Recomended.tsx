"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
  brand: string;
  type: string;
  transmission: string;
  seatingCapacity: string;
  fuelCapacity: string;
  pricePerDay: string;
  imageUrl?: string;
  tags: string;
}

const Recomended: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [visibleCars, setVisibleCars] = useState<Car[]>([]);
  const [visibleCount, setVisibleCount] = useState(4); // Initial cars to show

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const query = `
          *[_type == "car"]{
            _id,
            name,
            brand,
            type,
            pricePerDay,
            transmission,
            fuelCapacity,
            seatingCapacity,
            "imageUrl": image.asset->url,
            tags
          }
        `;
        const data: Car[] = await client.fetch(query);
        setCars(data);
        setVisibleCars(data.slice(0, visibleCount)); // Show initial cars
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchCarData();
  }, [visibleCount]); // Added visibleCount as a dependency

  const showMoreCars = () => {
    const newCount = visibleCount + 4; // Increase the count by 6 cars
    setVisibleCount(newCount);
    setVisibleCars(cars.slice(0, newCount)); // Show more cars
  };

  return (
    <div className="2xl:w-[1440px] mt-8 m-auto md:w-[98%] h-auto mb-7 2xl:h-[873px]">
      <div className="w-[98%] m-auto h-[44px] flex justify-between items-center">
        <p className="text-customgray text-[24px] ml-4">Recomended Car</p>
      </div>

      <div className="w-[100%] flex flex-wrap justify-around gap-4 p-4">
        {visibleCars.map((car) => (
          <div
            key={car._id}
            className="h-[240px] w-[327px] sm:h-[388px] sm:w-[80%] sm:flex sm:flex-col sm:items-center sm:justify-between md:h-[388px] md:w-[304px] shadow-lg rounded-lg bg-white md:flex md:flex-col md:items-center"
          >
            <div className="w-[90%] m-auto mt-5 h-[20%] flex justify-between">
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
                />
              </div>
            </div>

            <div className="relative left-[30px] top-8 sm:top-0 sm:left-0 w-[100%] sm:relative sm:bottom-9 sm:flex sm:flex-col sm:items-center md:h-[64px] md:flex md:justify-center md:relative md:bottom-9">
              <Image
                className="w-[142px] h-[64px] sm:w-[340px] sm:h-[108px] md:w-[204px] md:h-[100px]"
                src={`${car.imageUrl}`}
                alt="car"
                width={204}
                height={100}
              />
            </div>

            <div className="mt-[40px] h-[74px] w-[100%] sm:relative sm:bottom-2 sm:h-[150px] sm:flex sm:flex-col sm:items-center sm:justify-around md:relative md:bottom-0 md:w-[90%] md:h-[30%] md:flex md:justify-evenly md:flex-col">
              <div className="w-[55px] h-fit relative left-[230px] bottom-20 sm:relative sm:left-0 sm:bottom-0 flex flex-col justify-evenly sm:w-[100%] sm:h-[24px] sm:flex sm:justify-evenly sm:flex-row md:flex md:justify-normal md:gap-8">
                <div className="w-[70px] sm:w-[58px] h-[24px] flex gap-2">
                  <Image
                    className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                    src={"/icon/gas.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-customgray text-[12px] sm:text-[16px]">
                    {car.fuelCapacity}
                  </p>
                </div>

                <div className="w-[70px] sm:w-[58px] h-[24px] flex gap-1">
                  <Image
                    className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                    src={"/icon/circle.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-customgray text-[12px] sm:text-[16px]">
                    {car.transmission}
                  </p>
                </div>

                <div className="w-[70px] sm:w-[58px] md:w-[100px] h-[24px] flex gap-1">
                  <Image
                    className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px]"
                    src={"/icon/profile.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-customgray text-[12px] sm:text-[16px]">
                    {car.seatingCapacity}
                  </p>
                </div>
              </div>

              <div className="w-[100%] h-[60px] flex justify-around items-center sm:flex sm:justify-evenly sm:items-center">
                <div className="relative bottom-16 sm:relative sm:bottom-0 w-[116px] h-[44px] flex justify-center items-center">
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
                  }}>
                  <button className="sm:relative sm:bottom-0 relative bottom-16 w-[116px] h-[44px] bg-customblue rounded-[4px] text-customwhite">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[100px] w-[100%] flex justify-center items-center">
        {visibleCount < cars.length && (
          <button
            onClick={showMoreCars}
            className="w-[156px] h-[44px] bg-customblue text-customwhite border-transparent rounded-[5px]"
          >
            Show more car
          </button>
        )}
       
      </div>
    </div>
  );
};

export default Recomended;

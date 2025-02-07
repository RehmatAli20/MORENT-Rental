"use client";
import React, { useState } from "react";
import FilterSidebar from "../component/FilterSidebar";
import Image from "next/image";
import Updatedpickup from "../component/Updatedpickup";
import Updateddrop from "../component/Updateddrop";
import UpdatedRecomended from "../Category/UpdatedRecomended";

const Page = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); 

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter) 
        : [...prevFilters, filter] 
    );
  };

  return (
    <div className="flex 2xl:w-[1440px] bg-[#F6F7F9] justify-center m-auto mb-7">
      <FilterSidebar onFilterChange={handleFilterChange} cars={[]} />

      <div>
        <div className="h-auto p-5 lg:h-[162px] md:m-1 flex justify-center items-center flex-col sm:flex sm:items-center sm:justify-around sm:flex-wrap">
          <Updatedpickup />
          <div className="h-[50px] flex justify-center lg:w-[50px] w-[100%] m-[5px]">
            <button className="h-[50px] w-[50px] bg-customblue rounded-[5px] flex justify-center items-center">
              <Image
                src={"/icon/Swap.png"}
                alt="updwon"
                width={24}
                height={24}
              />
            </button>
          </div>
          <Updateddrop />
        </div>

        <div className="w-[98%] m-auto h-auto mt-5">
          <UpdatedRecomended selectedFilters={selectedFilters} />
        </div>
      </div>
    </div>
  );
};

export default Page;

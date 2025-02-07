
import React, { useState } from "react";

// Define the type for the component props
interface FilterSidebarProps {
  cars: { type: string; seatingCapacity: string; pricePerDay: number }[]; // Define the cars prop type
  onFilterChange: (filter: string) => void; // Function to handle filter changes
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ cars = [], onFilterChange }) => {
  const types = ["Sport", "SUV", "Hybrid", "Sedan","Electric", "Gasoline", "Hatchback"];
  const capacities = [ "2 People","4 People","5 People" , "6 People", "7 People", "8 People"];
  
  

  const [priceRange, setPriceRange] = useState<number>(50);

  const handleCheckboxChange = (filter: string) => {
    onFilterChange(filter); 
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
    onFilterChange(`Price: $${e.target.value}`); 
  };

  return (
    <div className="2xl:w-[360px] lg:w-[18%] hidden lg:block bg-[#FFFFFF]">
      {/* Types Filter Section */}
      <div className="h-[352px] w-[176px] ml-6 flex flex-col justify-between mb-14">
        <p className="text-md text-customgray">TYPE</p>
        {types.map((type, index) => (
          
          <div key={index} className="h-[24px] w-[176px] flex gap-2 items-center">
            <input
              type="checkbox"
              className="h-[20px] w-[20px]"
              onChange={() => handleCheckboxChange(type)} 
            />
            <label className="flex gap-1">
              {type} 
            </label>
          </div>
        ))}
      </div>

      {/* Capacities Filter Section */}
      <div className="h-[240px] w-[176px] ml-6 flex flex-col mb-14 justify-between">
        <p className="text-md text-customgray">CAPACITY</p>
        {capacities.map((capacity, index) => (
          <div key={index} className="h-[24px] w-[176px] flex gap-2 items-center">
            
            <input
              type="checkbox"
              className="h-[20px] w-[20px]"
              onChange={() => handleCheckboxChange(capacity)} 
            />
            <label className="flex gap-1">
              {capacity} 
            </label>
          </div>
        ))}
      </div>

      {/* Price Range Filter Section */}
      <div className="w-80 mx-auto ml-6 mb-14">
        <p className="text-gray-500 text-md mb-2">PRICE</p>
        <input
          type="range"
          min="0"
          max="200"
          value={priceRange}
          onChange={handlePriceRangeChange}
          className="w-[60%] h-3 bg-[#91A3BF] rounded-lg appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-customblue
            [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:border-2 
            [&::-webkit-slider-thumb]:rounded-full"
        />
        <p className="text-gray-700 mt-2 font-medium">Max. ${priceRange}.00</p>
      </div>
    </div>
  );
};

export default FilterSidebar;
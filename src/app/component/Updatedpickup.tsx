import React, { useState } from "react";
import Image from "next/image";
export default function Pick() {
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [showDateOptions, setShowDateOptions] = useState(false);
  const [showTimeOptions, setShowTimeOptions] = useState(false);

  const [selectedCity, setSelectedCity] = useState("Select your city");
  const [selectedDate, setSelectedDate] = useState("Select your date");
  const [selectedTime, setSelectedTime] = useState("Select your time");

  return (
    
    <div className=" h-[150px] w-[327px] sm:h-[132px] sm:w-[482px]  bg-white shadow-lg rounded-lg max-w-4xl  flex flex-col justify-center items-center">
        {/* Radio Button Section */}

        <div className="mb-1  flex  justify-start w-[82%]">
          <label className="flex items-center  gap-2  cursor-pointer">
            <input type="radio" className="w-4 h-4" />
            <span className=" font-bold">Pick - Up</span>
          </label>
        </div>

        <div className="   h-[44px] w-[295px] sm:h-[70px]   sm:w-[436px]   ">
          {/* Options Section */}
          <div className="grid grid-cols-3 gap-2   items-center h-[44px]  w-[295px] sm:h-[70px]  sm:w-[436px] ">
            {/* Locations */}
            <div className="relative  w-[76px] h-[100%] sm:w-[150px]    sm:border-r-[1px] sm:border-[#E7EEF6] ">
              <h3 className="text-gray-900 font-semibold mb-2 ml-2">Locations</h3>
              <div
                className="   sm:w-[140px]  
                                        sm:h-[30px] flex justify-around  items-center cursor-pointer m-auto"
                onClick={() => setShowLocationOptions(!showLocationOptions)}
              >
                <span className="text-gray-500 text-[10px] sm:text-[14px]">
                  {selectedCity}
                </span>
                <span className="text-gray-500">
                  <Image
                    src={"/icon/arrowdown.png"}
                    alt="arrow"
                    width={14}
                    height={14}
                  ></Image>
                </span>
              </div>
              {/* Dropdown for Locations */}
              {showLocationOptions && (
                <ul className="absolute bg-white border rounded-md mt-1 w-full shadow-lg z-10">
                  {[
                    "New York",
                    "Los Angeles",
                    "Chicago",
                    "Houston",
                    "Miami",
                  ].map((city, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelectedCity(city);
                        setShowLocationOptions(false);
                      }}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Date */}
            <div className="relative   h-[100%] w-[76px]  sm:w-[150px]   sm:border-r-[1px] sm:border-[#E7EEF6]">
              <h3 className="text-gray-900 font-semibold mb-2 ml-2">Date</h3>
              <div
                className=" sm:w-[140px]   m-auto sm:h-[30px] flex justify-between items-center cursor-pointer"
                onClick={() => setShowDateOptions(!showDateOptions)}
              >
                <span className="text-gray-500 text-[10px] sm:text-[14px] ">
                  {selectedDate}
                </span>
                <span className="text-gray-500">
                  <Image
                    src={"/icon/arrowdown.png"}
                    alt="arrow"
                    width={14}
                    height={14}
                  ></Image>
                </span>
              </div>
              {/* Dropdown for Dates */}
              {showDateOptions && (
                <ul className="absolute bg-white border rounded-md mt-1 w-full shadow-lg z-10">
                  {["2024-06-01", "2024-06-02", "2024-06-03"].map(
                    (date, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setSelectedDate(date);
                          setShowDateOptions(false);
                        }}
                      >
                        {date}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            {/* Time */}
            <div className="relative   w-[76px]  h-[100%] sm:w-[150px]  sm:border-r-[1px] sm:border-[#E7EEF6] ">
              <h3 className="text-gray-900 font-semibold mb-2 ml-2">Time</h3>
              <div
                className="sm:w-[140px] m-auto sm:h-[30px]  flex justify-between items-center cursor-pointer"
                onClick={() => setShowTimeOptions(!showTimeOptions)}
              >
                <span className="text-gray-500 text-[10px] sm:text-[14px] ">
                  {selectedTime}
                </span>
                <span className="text-gray-500">
                  <Image
                    src={"/icon/arrowdown.png"}
                    alt="arrow"
                    width={14}
                    height={14}
                  ></Image>
                </span>
              </div>
              {/* Dropdown for Time */}
              {showTimeOptions && (
                <ul className="absolute bg-white border rounded-md mt-1 w-full shadow-lg z-10">
                  {["10:00 AM", "02:00 PM", "06:00 PM"].map((time, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelectedTime(time);
                        setShowTimeOptions(false);
                      }}
                    >
                      {time}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

  );
}

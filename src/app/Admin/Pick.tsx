"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
export default function Drop() {
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [showDateOptions, setShowDateOptions] = useState(false);
  const [showTimeOptions, setShowTimeOptions] = useState(false);

  const [selectedCity, setSelectedCity] = useState("Select your city");
  const [selectedDate, setSelectedDate] = useState("Select your date");
  const [selectedTime, setSelectedTime] = useState("Select your time");

  return (
    <div className=" h-auto w-[100%]  flex gap-5 flex-col   ">
      <div className="mb-1  flex  justify-start w-[100%]">
        <label className="flex items-center  gap-2  cursor-pointer">
          <input type="radio" className="w-4 h-4" />
          <span className=" font-bold">Drop - off</span>
        </label>
      </div>

      <div className="md:grid md:grid-cols-3  gap-4 sm:gap-0  flex flex-col  items-center   h-auto md:h-[70px] w-[100%]  ">
        <div className="relative  h-[88px] mb-2  w-[100%] md:h-[100%]   lg:w-[100%]  md:border-r-[1px] md:border-[#E7EEF6] ">
          <h3 className="text-gray-900 font-semibold mb-2 md:ml-2">
            Locations
          </h3>
          <div
            className="     
                                     mb-2     bg-[#F6F7F9] md:bg-white  h-[56px] w-[96%]   rounded-[10px]  md:rounded-none md:h-[30px] flex justify-between items-center px-3 md:px-0 md:flex md:justify-around  md:items-center cursor-pointer m-auto"
            onClick={() => setShowLocationOptions(!showLocationOptions)}
          >
            <span className="text-gray-500 text-[6px] sm:text-[14px]">
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
          {showLocationOptions && (
            <ul className="absolute bg-white border rounded-md mt-1 w-full  z-10">
              {["New York", "Los Angeles", "Chicago", "Houston", "Miami"].map(
                (city, index) => (
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
                )
              )}
            </ul>
          )}
        </div>

        <div className="relative     h-[88px]  w-[100%] md:h-[100%]    md:border-r-[1px]  lg:w-[100%] md:border-[#E7EEF6]">
          <h3 className=" font-semibold mb-2 md:ml-2">Date</h3>
          <div
            className="    bg-[#F6F7F9] md:bg-white  h-[56px]  mb-2 w-[96%]  rounded-[6px]  md:rounded-none md:h-[30px] flex justify-between items-center px-3 md:px-0 md:flex md:justify-around  md:items-center cursor-pointer m-auto"
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
          {showDateOptions && (
            <ul className="absolute bg-white border rounded-md mt-1 w-full  z-10">
              {["2024-06-01", "2024-06-02", "2024-06-03"].map((date, index) => (
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
              ))}
            </ul>
          )}
        </div>

        <div className="relative    h-[88px]  w-[100%] md:h-[100%]    lg:w-[100%] md:border-r-[1px] md:border-[#E7EEF6] ">
          <h3 className="text-gray-900 font-semibold mb-2 md:ml-2">Time</h3>
          <div
            className=" h-[56px]  w-[96%] mb-2   bg-[#F6F7F9] md:bg-white rounded-[6px]  md:rounded-none md:h-[30px] flex justify-between items-center px-3 md:px-0 md:flex md:justify-around  md:items-center cursor-pointer m-auto"
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
          {showTimeOptions && (
            <ul className="absolute bg-white border rounded-md mt-1 w-full  z-10">
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
  );
}

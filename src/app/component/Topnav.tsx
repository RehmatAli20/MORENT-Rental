"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser, UserButton, useClerk } from "@clerk/nextjs";
// import whishlist from "./Wishlist"

export default function Topnav() {
  const { isSignedIn } = useUser();
  const { redirectToSignUp } = useClerk();
  const [showPopup, setShowPopup] = useState(false);

  const handleWishlistClick = () => {
    if (isSignedIn) {
      window.location.href = "/wishlist/page.tsx";
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className="h-[260px] m-auto w-full flex items-center md:h-[124px] 2xl:w-[1440px] relative">
      <div className="h-[357px] w-[768px] flex items-center justify-center 2xl:w-[1320px] md:h-[44px] m-auto md:flex">
        <h1 className="text-customblue w-[108px] h-[28px] font-bold text-[28px] absolute top-10 left-10 md:text-[24px] md:left-[70px]">
          MORENT
        </h1>

        <div className="w-full flex justify-center gap-10 items-center md:h-[44px] md:w-[492px] md:bg-customwhite md:rounded-[70px] shadow-sm md:border md:absolute md:left-[260px]">
          <div className="border md:border-none w-[263px] gap-4 h-[48px] flex items-center bg-customwhite shadow-sm md:shadow-none md:bg-transparent rounded-md md:h-[44px] md:w-[90%] md:gap-5">
            <Image src="/icon/search.png" className="relative left-3" alt="icon" width={24} height={24} />
            <input type="text" className="h-[42px] w-[90%] border-none outline-none" placeholder="Search Something here.." />
          </div>

          <div className="w-[48px] h-[48px] hover:cursor-pointer flex items-center justify-center shadow-sm md:shadow-none md:border-none border rounded-md bg-customwhite md:bg-transparent">
            <Link href={"/Category"}>
              <Image src="/icon/filter.png" className="md:absolute md:right-4 top-3" alt="icon" width={24} height={24} />
            </Link>
          </div>
        </div>

        <div className="absolute top-10 right-6 flex justify-end items-center md:w-[236px] md:h-[44px] md:right-6 md:justify-between">
          {/* Wishlist button with conditional popup */}
         
          <div className="hidden md:flex border h-[44px] w-[44px] rounded-full justify-center items-center cursor-pointer" onClick={handleWishlistClick}>
            <Image src="/icon/heart.png" alt="Wishlist Icon" width={24} height={24} />
          </div>
         
          <div className="hidden md:flex border h-[44px] w-[44px] rounded-full justify-center items-center">
            <Image src="/icon/noti.png" alt="icon" width={24} height={24} />
          </div>
          <div className="hidden md:flex border h-[44px] w-[44px] rounded-full justify-center items-center">
            <Image src="/icon/setting.png" alt="icon" width={24} height={24} />
          </div>

          {/* User Profile / Sign-in Button */}
          <div className="border h-[44px] w-[44px] rounded-full flex justify-center items-center">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
     <div onClick={() => redirectToSignUp()} >     
<Image src="/icon/R.png" alt="Account" width={50} height={50} />
 </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
            <p className="text-lg font-semibold mb-4">Please sign in to access your wishlist</p>
            <button
              onClick={() => redirectToSignUp()}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Sign In
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

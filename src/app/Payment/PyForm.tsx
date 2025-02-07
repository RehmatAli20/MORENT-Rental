import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function PyForm() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const price = searchParams.get("price");
  const fule = searchParams.get("fule");
  const person = searchParams.get("Person");
  const types = searchParams.get("types");
  const logo = searchParams.get("logo");
  return (
    <div className="m-auto lg:m-0 md:w-[852px] h-auto w-[330px] mb-8 flex flex-col gap-8">
      <div
        className=" w-[327px] h-[516px] md:w-[95%] lg:w-[100%] lg:h-[336px]  rounded-[10px] m-auto
      bg-[#ffffff]  flex flex-col justify-around items-center md:grid md:grid-cols-2 md:grid-rows-3 gap-4 md:place-items-center"
      >
        <div className="h-[48px] w-[96%] m-auto  flex items-center justify-between col-span-2">
          <div className="w-[192px] h-[48px]">
            <h1 className="w-[100%] h-[24px] font-semibold text-xl">
              Billing Info
            </h1>
            <p className="w-[100%] h-[24px] text-sm text-customgray">
              Please enter your billing info
            </p>
          </div>
          <p className=" h-[24px] text-sm text-customgray w-[72px]">
            Step 1 of 3
          </p>
        </div>

        <div className=" h-[88px] w-[295px] relative bottom-5  md:h-[92px] md:w-[386px] flex justify-between flex-col">
          <h1>Name</h1>
          <input
            className="h-[56px] w-[100%] flex items-center outline-none p-6 bg-[#eaebee] rounded-[10px]"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className=" h-[88px] w-[295px]  relative bottom-5 md:h-[92px] md:w-[386px] flex justify-between flex-col">
          <h1>Phone Number</h1>
          <input
            className="h-[56px] w-[100%] flex items-center p-6 bg-[#eaebee] outline-none rounded-[10px]"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className=" h-[88px] w-[295px]  relative bottom-5 md:h-[92px] md:w-[386px] flex justify-between flex-col">
          <h1>Address</h1>
          <input
            className="h-[56px] w-[100%] flex items-center p-6 bg-[#eaebee]  outline-none rounded-[10px]"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className=" h-[88px] w-[295px] relative bottom-5 md:h-[92px] md:w-[386px] flex justify-between flex-col">
          <h1>Town / City</h1>
          <input
            className="h-[56px] w-[100%] flex items-center p-6 bg-[#eaebee]  outline-none rounded-[10px]"
            type="text"
            placeholder="Town or City"
          />
        </div>
      </div>

      <div className=" w-[327px] m-auto md:w-[95%]  lg:w-[100%] h-[742px] md:h-[596px] bg-[#ffffff] flex flex-col justify-around rounded-[10px]">
        <div className="h-[48px] w-[96%] m-auto  flex items-center justify-between col-span-2">
          <div className="w-[236px] h-[48px]">
            <h1 className="w-[100%] h-[24px] font-semibold text-xl">
              Payment Method
            </h1>
            <p className="w-[100%] h-[24px] text-sm text-customgray">
              Please enter your payment method
            </p>
          </div>
          <p className=" h-[24px] text-sm text-customgray w-[72px]">
            Step 2 of 3
          </p>
        </div>

        <div className=" md:w-[95%] w-[295px] m-auto h-[494px] md:h-[308px] bg-[#eaebee] rounded-[10px]  flex justify-around items-center flex-col md:grid md:grid-cols-2 md:grid-rows-3 md:gap-2  md:place-items-center ">
          <div className="col-span-2  md:relative bottom-2  flex  justify-between  h-[34px]  w-[99%] p-1 items-center  gap-3  cursor-pointer">
            <div className="w-[120px] h-[34px] flex gap-3 items-center">
              <input type="radio" className="w-4 h-4" />
              <span className="text-md font-semibold">Credit Card</span>
            </div>

            <div className="w-[92px] h-[24px] ">
              <Image
                src={"/Payment/Visa.png"}
                width={92}
                height={24}
                alt="visa"
              ></Image>
            </div>
          </div>

          <div className="h-[88px] md:h-[92px] md:relative md:bottom-8 md:w-[386px] w-[96%] flex justify-between flex-col">
            <h1>Card Number</h1>
            <input
              className="h-[56px] w-[100%] flex outline-none items-center p-6 bg-[#ffffff] rounded-[10px]"
              type="text"
              placeholder="Card Number"
            />
          </div>
          <div className="h-[88px] md:h-[92px] md:relative md:bottom-8 md:w-[386px] w-[96%]  flex justify-between flex-col">
            <h1>Expration Date</h1>
            <input
              className="h-[56px] w-[100%] flex outline-none items-center p-6 bg-[#ffffff] rounded-[10px]"
              type="text"
              placeholder="DD / MM / YY"
            />
          </div>
          <div className="h-[88px] md:h-[92px] md:relative md:bottom-8 md:w-[386px] w-[96%] flex justify-between flex-col">
            <h1>Card Holder</h1>
            <input
              className="h-[56px] w-[100%] flex outline-none items-center p-6 bg-[#ffffff] rounded-[10px]"
              type="text"
              placeholder="Card Holder"
            />
          </div>
          <div className="h-[88px] md:h-[92px] md:relative md:bottom-8 md:w-[386px] w-[96%]  flex justify-between flex-col">
            <h1>CVC</h1>
            <input
              className="h-[56px] w-[100%] flex outline-none items-center p-6 bg-[#ffffff] rounded-[10px]"
              type="text"
              placeholder="CVC"
            />
          </div>
        </div>

        <div className="col-span-2    b  flex  justify-between  h-[56px]   bg-[#eaebee] w-[95%] m-auto rounded-[10px] p-1 items-center  gap-3  cursor-pointer">
          <div className="w-[120px] h-[56px] ml-6  flex gap-4 items-center">
            <input type="radio" className="w-6 h-6" />
            <span className="text-lg ">PayPal</span>
          </div>

          <div className="w-[100px] h-[24px] mr-6">
            <Image
              src={"/Payment/PayPal.png"}
              width={100}
              height={24}
              alt="visa"
            ></Image>
          </div>
        </div>

        <div className="col-span-2    b  flex  justify-between  h-[56px]   bg-[#eaebee] w-[95%] m-auto rounded-[10px] p-1 items-center  gap-3  cursor-pointer">
          <div className="w-[120px] h-[56px] ml-6  flex gap-4 items-center">
            <input type="radio" className="w-6 h-6" />
            <span className="text-lg ">Bitcoin</span>
          </div>

          <div className="w-[95px] h-[20px] mr-6">
            <Image
              src={"/Payment/Bitcoin.png"}
              width={94}
              height={20}
              alt="visa"
            ></Image>
          </div>
        </div>
      </div>

      <div className="md:h-[484px] md:w-[95%] lg:w-[100%] w-[327px] h-[476px] m-auto flex flex-col justify-around  bg-[#ffffff] rounded-[10px]">
        <div className="md:h-[48px] h-auto w-[96%] m-auto flex items-center justify-between col-span-2">
          <div className=" w-[80%] md:w-[50%] h-auto md:h-[48px]">
            <h1 className="w-[100%] h-[24px] font-semibold text-xl">
              Confirmation
            </h1>
            <p className="w-[100%] md:h-[24px] text-sm text-customgray h-auto">
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
          </div>
          <p className=" h-[24px] text-sm text-customgray w-[72px]">
            Step 3 of 3
          </p>
        </div>

        <div className="col-span-2    flex   h-[64px] md:h-[56px]   bg-[#eaebee]   w-[95%] m-auto rounded-[10px] pl-6 items-center  gap-5  cursor-pointer">
          <input type="checkbox" className="w-6 h-6 outline-none" />
          <span className="md:text-lg  text-[14px] ">
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </span>
        </div>

        <div className="col-span-2   flex  h-[64px]  md:h-[56px]   bg-[#eaebee] w-[95%] m-auto rounded-[10px] pl-6 items-center  gap-5  cursor-pointer">
          <input type="checkbox" className="w-6 h-6 outline-none" />
          <span className="md:text-lg  text-[14px] ">
            I agree with our terms and conditions and privacy policy.
          </span>
        </div>

        <div className="w-[96%] m-auto  h-[36px] md:h-[56px]">
          <button className="  w-[100px] md:w-[140px]  h-[36px] md:h-[56px] bg-customblue  rounded-[10px] text-[#ffff]">
            <Link
              href={{
                pathname: `/Admin/Admindisplay`,
                query: { name, image, price, fule, person, types },
              }}
            >
              Rent Now
            </Link>
          </button>
        </div>

        <div className="w-[96%] h-auto m-auto">
          <div className=" w-[100%] md:w-[590px]  h-[110px] md:h-[100px]   flex justify-between flex-col">
            <Image
              src={"/Payment/security.png"}
              width={32}
              height={32}
              alt="security"
            ></Image>
            <h1 className="text-md font-semibold">All your data are safe</h1>
            <p className="text-customgray ">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

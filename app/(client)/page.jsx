import ServiceCard from "@/components/ServiceCard";
import ServiceDisplay from "@/components/ServiceDisplay";
import { FaChevronDown, SlCalender, message, text } from "@/utils/assets";
import { services } from "@/utils/constants";

import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="hero  p-5 h-screen">
        <div className="lg:px-20 gap-5 bg-opacity-50 lg:flex justify-between pt-28 ">
          <div className="flex flex-col gap-5 w-full">
            <h2 className="text-white text-3xl text-center lg:text-left">
              WELCOME TO
            </h2>
            <h1 className="text-primary text-6xl text-center lg:text-left">
              HOSPIPRO
            </h1>
            <h2 className="text-white text-3xl tracking-widest text-center lg:text-left">
              HOTELS MANAGEMENT
            </h2>
            <p className="text-white text-lg lg:w-96 text-center lg:text-left">
              Book your stay and enjoy Luxury redefined at the most affordable
              rates.
            </p>
            <div className="flex justify-center">
              <button className="flex items-center gap-2 font-semibold text-white bg-primary py-3 px-5 rounded-lg">
                <SlCalender /> Book Now
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white font-semibold">Scroll</p>
              <div>
                <button className=" text-black bg-white p-3 rounded-full text-xl">
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex">
            <Image src={text} />
          </div>
          <div className="hidden lg:flex lg:items-end justify-end">
            <Image src={message} />
          </div>
        </div>

        <p className="text-white text-lg text-center pt-5 lg:pt-0 ">
          All our room types are including complementary breakfast
        </p>
        <div className="flex lg:hidden lg:items-end justify-end pt-10">
          <Image src={message} />
        </div>
      </div>

      <div>
        <ServiceDisplay />
      </div>
      <div className="bg-primary m-5 lg:m-20 lg:p-10 p-5 text-center rounded-lg ">
        <h1 className="font-semibold my-3 text-4xl">Testimonials</h1>
        <p className="text-xl">
          "Calm, Serene, Retro – What a way to relax and enjoy" Mr. and Mrs.
          Baxter, UK
        </p>
      </div>
    </div>
  );
}

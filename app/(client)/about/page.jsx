import { about } from "@/utils/assets";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="pt-28 flex flex-col-reverse lg:flex-row  items-center min-h-screen">
      <div className="lg:p-10 p-5 lg:w-11/12 flex flex-col gap-5">
        <h2 className = "text-2xl font-semibold text-gray-600">About Us</h2>
        <h1 className = "lg:text-4xl text-2xl font-semibold ">WE ARE HERE FOR YOU</h1>
        <p>
          HospiPro is your all-in-one solution for seamless hotel management.
          Our cutting-edge system empowers hoteliers to optimize operations,
          elevate guest satisfaction, and boost revenue. With features including
          an intuitive admin dashboard, effortless booking management,
          streamlined staff tracking, efficient inventory control, secure
          authentication, impactful donation capabilities, comprehensive
          reporting, convenient food ordering, and accurate expense prediction,
          HospiPro transforms the way you run your hotel. Experience the future
          of hotel management today. Contact us and unlock the potential of
          HospiPro for your hotel's success.
        </p>
      </div>
      <div>
        <Image src={about}  />
      </div>
    </div>
  );
}

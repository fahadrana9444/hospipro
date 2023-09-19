import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { service_1 } from "@/utils/assets";
import Link from "next/link";

export default function ServiceCard({
  even = true,
  title = "Luxury Redefined",
  description = "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
  image,
  link = "/",
}) {
  return (
    <div
      className={` lg:my-5 lg:flex p-10 gap-20 justify-center ${
        even ? "flex-row" : "flex-row-reverse"
      }   `}
    >
      <div>
        <Image src={image ? image : service_1} className="lg:w-96" />
      </div>
      <div className="lg:w-96 lg:border-l-2 flex flex-col justify-center p-5 gap-5 border-black text-center lg:text-left">
        <h1 className="text-primary text-2xl font-semibold">{title}</h1>
        <p className="line-clamp-6">{description}</p>
        <div>
         <Link  href={link}> <CustomButton title="Explore" link={link} variant={"three"} /></Link>
        </div>
      </div>
    </div>
  );
}

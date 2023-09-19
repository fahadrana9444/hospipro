
import { room, service_1 } from "@/utils/assets";
import Image from "next/image";
import React from "react";

export default function OtherServiceCard({
  image,
  title = "Luxury redefined",
  description = "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
}) {
  return (
    <div className="lg:w-56 w-full border border-primary p-4 m-4 rounded-md text-center">
      <Image className="rounded-md" src={image?image:service_1} />
      <h3 className="font-semibold text-primary my-3">{title}</h3>
      <p className="line-clamp-1">{description}</p>
    </div>
  );
}

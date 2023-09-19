"use client";
import ServiceCard from "@/components/ServiceCard";
import ServiceDisplay from "@/components/ServiceDisplay";
import { carousel, services } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Services() {
  return (
    <div className="pt-28">
      <div className=" lg:mx-10 mx-5 lg:mt-5">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          {carousel.map((item, index) => (
            <div key={index}>
              <Image src={item.image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <h1 className="lg:text-4xl text-xl text-center lg:text-left text-primary font-semibold lg:p-10 pt-5">
        Services Provided By HospiPro
      </h1>
      <div>
        <ServiceDisplay />
      </div>
    </div>
  );
}


import React from "react";
import OtherServiceCard from "./OtherServiceCard";
import { services } from "@/utils/constants";

export default function OtherService() {
  return (
    <div>
      <h1 className="my-5 text-center text-4xl text-primary">Other Services</h1>
      <div className="flex flex-wrap justify-center">
      {services[Math.floor(Math.random() * services.length)].map(
        (item, index) => (
          <OtherServiceCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      )}
      {services[Math.floor(Math.random() * services.length)].map(
        (item, index) => (
          <OtherServiceCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      )}
    </div>
    </div>
  );
}

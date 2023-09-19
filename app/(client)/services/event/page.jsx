"use client";
import CustomButton from "@/components/CustomButton";
import OtherService from "@/components/OtherService";
import QRQCode from "@/components/QRQCode";
import { event, event_2 } from "@/utils/assets";
import { events } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };
  return (
    <div className="pt-28">
      <div className="lg:p-28 lg:m-20 rounded-lg p-5 m-5 shadow-primary border-2 border-primary">
        <h2 className="text-2xl font-semibold mb-4 text-center text-primary">
          Event Booking
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="event" className="block font-semibold mb-1">
              Event
            </label>
            <Controller
              name="event"
              control={control}
              defaultValue=""
              rules={{ required: "Event is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.event && (
              <span className="text-red-600">{errors.event.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="tickets" className="block font-semibold mb-1">
              Number of Tickets
            </label>
            <Controller
              name="tickets"
              control={control}
              defaultValue="1"
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  min="1"
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block font-semibold mb-1">
              Event Date
            </label>
            <Controller
              name="date"
              control={control}
              defaultValue=""
              rules={{ required: "Event date is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.date && (
              <span className="text-red-600">{errors.date.message}</span>
            )}
          </div>
          <div className="text-center">
            <CustomButton variant={"four"} title="Book Now" />
          </div>
        </form>
      </div>

      <div className="flex justify-center px-5">
        <Image src={event} />
      </div>
      <div>
        <QRQCode />
      </div>

      <div className="flex flex-wrap justify-center">
        {events.map((item, index) => (
          <div className="lg:w-72 w-full p-4 m-4 ">
            <Image src={item.image} />
            <p className="text-sm my-3 text-gray-500">
              SAVE ON FLIGHTS TO GET GOING
            </p>
            <p>Flight deals ready to take you to the most-loved</p>
          </div>
        ))}
      </div>

      <div>
        <OtherService />
      </div>
    </div>
  );
}

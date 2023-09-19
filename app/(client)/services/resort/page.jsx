"use client";
import CustomButton from "@/components/CustomButton";
import OtherService from "@/components/OtherService";
import QRQCode from "@/components/QRQCode";
import { resort } from "@/utils/assets";
import { events, resorts } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { useForm, Controller } from "react-hook-form";
export default function page() {
  const { control, handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };
  return (
    <div className="pt-28">
      <div className="lg:p-8 p-4 m-4 rounded-lg shadow-lg border-2 border-primary">
        <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
          Resort Booking
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold mb-2">
              Full Name
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
                  className="w-full border rounded-md py-2 px-3 text-lg"
                  placeholder="Enter your name"
                />
              )}
            />
            {errors?.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold mb-2">
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
                  className="w-full border rounded-md py-2 px-3 text-lg"
                  placeholder="Enter your email"
                />
              )}
            />
            {errors?.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="checkIn" className="text-lg font-semibold mb-2">
              Check-in Date
            </label>
            <Controller
              name="checkIn"
              control={control}
              defaultValue=""
              rules={{ required: "Check-in date is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className="w-full border rounded-md py-2 px-3 text-lg"
                />
              )}
            />
            {errors?.checkIn && (
              <span className="text-red-600">{errors.checkIn.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="checkOut" className="text-lg font-semibold mb-2">
              Check-out Date
            </label>
            <Controller
              name="checkOut"
              control={control}
              defaultValue=""
              rules={{ required: "Check-out date is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className="w-full border rounded-md py-2 px-3 text-lg"
                />
              )}
            />
            {errors?.checkOut && (
              <span className="text-red-600">{errors.checkOut.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="guests" className="text-lg font-semibold mb-2">
              Number of Guests
            </label>
            <Controller
              name="guests"
              control={control}
              defaultValue="1"
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  min="1"
                  className="w-full border rounded-md py-2 px-3 text-lg"
                />
              )}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomType" className="text-lg font-semibold mb-2">
              Room Type
            </label>
            <Controller
              name="roomType"
              control={control}
              defaultValue="standard"
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full border rounded-md py-2 px-3 text-lg"
                >
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suite</option>
                </select>
              )}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="text-lg font-semibold mb-2">
              City
            </label>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{ required: "City is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border rounded-md py-2 px-3 text-lg"
                  placeholder="Enter the city"
                />
              )}
            />
            {errors?.city && (
              <span className="text-red-600">{errors.city.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="text-lg font-semibold mb-2">
              Country
            </label>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border rounded-md py-2 px-3 text-lg"
                  placeholder="Enter the country"
                />
              )}
            />
            {errors?.country && (
              <span className="text-red-600">{errors.country.message}</span>
            )}
          </div>
          <div className="flex justify-center">
            <CustomButton variant={"four"} title="Book Now" />
          </div>
        </form>
      </div>
      <div className="flex justify-center m-5">
        <Image src={resort} />
      </div>
      <div>
        <QRQCode />
      </div>
      <div>
      <div className="flex flex-wrap justify-center">
        {resorts.map((item, index) => (
          <div className="lg:w-72 w-full p-4 m-4 ">
            <Image src={item.image} />
            <p className="text-sm my-3 text-gray-500">
              SAVE ON FLIGHTS TO GET GOING
            </p>
            <p>Flight deals ready to take you to the most-loved</p>
          </div>
        ))}
      </div>
      </div>

      <div>
        <OtherService />
      </div>
    </div>
  );
}

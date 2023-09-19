"use client";
import CustomButton from "@/components/CustomButton";
import QRQCode from "@/components/QRQCode";
import { hero, room } from "@/utils/assets";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
export default function Rooms() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here (data contains form values)
    console.log(data);
  };

  return (
    <div className="pt-28">
      <div className=" lg:p-28 lg:m-20 rounded-lg p-5 m-5  shadow-primary border-2 border-primary">
        <h2 className="text-2xl font-semibold mb-4 text-center text-primary ">
          Book a Room
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
                  type="text"
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="checkIn" className="block font-semibold mb-1">
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
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.checkIn && (
              <span className="text-red-600">{errors.checkIn.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="checkOut" className="block font-semibold mb-1">
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
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.checkOut && (
              <span className="text-red-600">{errors.checkOut.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block font-semibold mb-1">
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
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="roomType" className="block font-semibold mb-1">
              Room Type
            </label>
            <Controller
              name="roomType"
              control={control}
              defaultValue="standard"
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full border rounded-md py-2 px-3"
                >
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suite</option>
                </select>
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block font-semibold mb-1">
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
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.city && (
              <span className="text-red-600">{errors.city.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block font-semibold mb-1">
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
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.country && (
              <span className="text-red-600">{errors.country.message}</span>
            )}
          </div>
          <div className="flex justify-center mt-5">
           <CustomButton variant={'four'} title="Book Now" />
          </div>
        </form>
      </div>
      <div className="flex justify-center m-5">
        <Image src={room} className="rounded-md" />
      </div>
      <QRQCode />
    </div>
  );
}

"use client";
import CustomButton from "@/components/CustomButton";
import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function Contact() {
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
    <div className="pt-28 min-h-screen lg:flex items-center">
      <div className=" p-8 rounded-lg border-primary border m-5 lg:w-full">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
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
            <label htmlFor="message" className="block font-semibold mb-1">
              Message
            </label>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            {errors.message && (
              <span className="text-red-600">{errors.message.message}</span>
            )}
          </div>
         <div className="flex justify-center">
         <CustomButton variant={'four'} title="Submit" />
         </div>
        </form>
      </div>

      <div className="m-5">
      <h1 className = "lg:text-4xl text-2xl font-semibold my-5">WE ARE HERE FOR YOU</h1>

        <p>
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, compaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </p>
        <ul className="my-5">
          <li>497 Evergreen Rd. Roseville, CA 95673</li>
          <li>Phone: +44 345 678 903</li>
          <li>Email: luxury_hotels@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

import { logo } from "@/utils/assets";
import Image from "next/image";
import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "../utils/assets";
import CustomButton from "./CustomButton";

export default function Footer() {
  return (
    <div>
      <div className=" bg-black text-white lg:m-20 m-5 lg:p-10 p-5 rounded-xl flex flex-col lg:flex-row gap-5 justify-between">
        <div>
          {" "}
          <h1 className="font-semibold lg:text-3xl text-xl">
            Stay in the loop
          </h1>
          <p>
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!{" "}
          </p>
        </div>
        <div className="bg-white flex gap-2 items-center rounded-md py-2 lg:px-5 px-2 ">
          <input
            className="text-black w-full"
            placeholder="Enter Your Email"
            type="email"
            name=""
            id=""
          />
          <CustomButton variant={"two"} title="Continue" />
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="  p-10 flex flex-col gap-5 lg:flex-row lg:items-end items-center lg:justify-between">
          <div className="flex flex-col lg:text-left text-center lg:items-start items-center">
            <Image src={logo} />
            <div>
              <h4>About us</h4>
              <p className="w-full lg:w-72">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident, ipsa?
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <button className="bg-white text-black p-2 rounded-full text-lg">
              <FaFacebookF />
            </button>
            <button className="bg-white text-black p-2 rounded-full text-lg">
              <FaInstagram />
            </button>
            <button className="bg-white text-black p-2 rounded-full text-lg">
              <FaTwitter />
            </button>
            <button className="bg-white text-black p-2 rounded-full text-lg">
              <FaLinkedinIn />
            </button>
          </div>
          <div>
            <div className=" flex ">
              <ul className="flex flex-col gap-2 ">
                <li>Company</li>
                <li>Portfolio</li>
                <li>Careers</li>
                <li>Contact us</li>
              </ul>
              <div className="w-full lg:w-56 mx-5">
                <p>@hospipro.com</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. +9000 0000 000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <hr className="border border-primary " />
          <p className="text-center my-1">
            Copyright ® 2023 Company All rights Rcerved
          </p>
        </div>
      </div>
    </div>
  );
}

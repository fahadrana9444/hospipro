import { charity_1 } from "@/utils/assets";
import Image from "next/image";
import React from "react";

export default function Charity() {
  return (
    <div className="pt-28 min-h-screen">
      <div className="charityHero  rounded-xl lg:mx-10 mx-5  bg-gray-500 bg-no-repeat bg-cover flex flex-col justify-center items-center lg:p-36 p-5 ">
        <h1 className="lg:text-6xl text-3xl text-white font-bold text-center">
          Feed Hope Feed Pakistan
        </h1>
        <button className="bg-primary opacity-70 text-white text-xl m-5 px-5 py-3 rounded-md">
          Donate Now
        </button>
      </div>

      <div className="lg:m-10 m-5 flex flex-col-reverse lg:flex-row gap-10 items-center">
        <Image src={charity_1} className="w-full lg:w-96 " />
        <div className="flex flex-col gap-5 ">
          <h1 className="text-2xl font-semibold">Hunger in pakistan</h1>
          <p>
            We focus on the Tharparkar region in Pakistan, one of the most food
            deprived communities in the world. Droughts and famines occur
            regularly in Tharparkar, which makes growing food and accessing
            clean water incredibly difficult. Most of the people who live in
            this region hardly ever manage to eat 2 meals a day. Every year,
            1,500 children die due to malnutrition. Facing such extreme
            challenges, Penny Appeal asks you to help. By simply donating £1 you
            will provide a meal to those who need it most.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-primary text-center">
          Your Donation can save lives
        </h1>
        <div className=" flex flex-wrap gap-10 justify-evenly my-10 m-5 ">
          <div className="lg:w-56 w-full shadow-lg rounded-3xl ">
            <div className="text-white text-3xl py-5 bg-black text-center rounded-tl-3xl rounded-tr-3xl ">30$</div>
            <div className="py-10 px-5 text-center text-lg">
              Could provide 30 meals for orphan and needy people?
            </div>
            <div>
              <button className="bg-black  text-white py-5 w-full text-3xl rounded-bl-3xl rounded-br-3xl ">
                Donate Now
              </button>
            </div>
          </div>
          <div className="lg:w-56 w-full shadow-lg rounded-3xl ">
            <div className="text-white text-3xl py-5 bg-black text-center rounded-tl-3xl rounded-tr-3xl ">30$</div>
            <div className="py-10 px-5 text-center text-lg">
              Could provide 30 meals for orphan and needy people?
            </div>
            <div>
              <button className="bg-black  text-white py-5 w-full text-3xl rounded-bl-3xl rounded-br-3xl ">
                Donate Now
              </button>
            </div>
          </div>
          <div className="lg:w-56 w-full shadow-lg rounded-3xl ">
            <div className="text-white text-3xl py-5 bg-black text-center rounded-tl-3xl rounded-tr-3xl ">30$</div>
            <div className="py-10 px-5 text-center text-lg">
              Could provide 30 meals for orphan and needy people?
            </div>
            <div>
              <button className="bg-black  text-white py-5 w-full text-3xl rounded-bl-3xl rounded-br-3xl ">
                Donate Now
              </button>
            </div>
          </div>
          
        </div>
      </div>

      <div className="flex justify-center text-center my-5 ">
        <p className="lg:w-6/12 m-5 text-xl text-gray-500">
          The issue of hunger in Pakistan is complex and multifaceted,
          influenced by factors such as poverty, limited access to education and
          healthcare, and natural disasters. Addressing this pervasive problem
          requires collective action and a comprehensive approach. By
          implementing sustainable solutions, promoting agricultural
          development, empowering communities, and fostering partnerships, we
          can make a significant impact in alleviating hunger and creating a
          brighter future for all Pakistanis."
        </p>
      </div>
    </div>
  );
}

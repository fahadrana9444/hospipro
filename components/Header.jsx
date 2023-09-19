"use client";
import { GiHamburgerMenu, RxCross1, logo } from "@/utils/assets";
import { navButtons } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuStyles = {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    position: "fixed",
    top: "0",
    right: "0",
    transition: "transform 1s ease",
    transform: menuVisible ? "translateX(0)" : "translateX(100%)",
  };
  return (
    <div className=" absolute w-full">
      {/* nav bar for lg screen */}

      <div className=" hidden lg:flex items-center justify-between px-10 py-5 bg-transparent">
        <div>
          <Image src={logo} className="w-24" />
        </div>
        <div className="flex gap-5 items-center ">
          {navButtons.map((item, index) => (
            <CustomButton
              variant={"nav"}
              title={item.title}
              link={item.link}
              key={index}
            />
          ))}
          <CustomButton title={"Log In"} variant={"one"} link={"/auth"} />

          <CustomButton variant={"avatar"} />
        </div>
      </div>

      {/* nav bar for mobile */}

      <div className="flex lg:hidden items-center justify-between px-10 py-5">
        <div>
          <Image src={logo} className="w-16" />
        </div>
        <div>
          <CustomButton
            variant={"icon"}
            Icon={<GiHamburgerMenu />}
            onClickHandel={() => {
              setMenuVisible(!menuVisible);
            }}
          />
        </div>
      </div>

      {menuVisible && (
        <div style={menuStyles} className="py-10 px-5">
          {/* Your menu content goes here */}
          <CustomButton
            variant={"icon"}
            Icon={<RxCross1 />}
            onClickHandel={() => {
              setMenuVisible(!menuVisible);
            }}
          />

          <div className="my-5">
            {navButtons.map((item, index) => (
              <div className="flex justify-center my-1 w-full bg-gray-100 py-2 rounded-md">
                <CustomButton
                  variant={"nav"}
                  title={item.title}
                  link={item.link}
                  key={index}
                />
              </div>
            ))}
            <div className="flex justify-center my-3">
              <CustomButton title={"Log In"} variant={"one"} link={"/auth"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

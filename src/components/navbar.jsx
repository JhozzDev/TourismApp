"use client";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { PiIslandBold } from "react-icons/pi";
import { FaInfo } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [s, setS] = useState(false);
  function set() {
    setS(!s);
  }
  return (
    <div className="fixed w-full">
      <div className="items-center bg-blue-400 shadow-md w-full flex p-3 justify-between">
        <FaUmbrellaBeach className="text-4xl flex gap-2 items-center ease-in-out duration-500  hover:text-white" />
        <div className="hidden sm:flex gap-10 pr-20">
          <Link href={"/"}>
            <p className=" ease-in-out duration-300 hover:text-white">
              Home <FaHome></FaHome>
            </p>
          </Link>{" "}
          <p className="ease-in-out duration-300 hover:text-white">
            Available <FaFlag></FaFlag>
          </p>
          <Link href={"places"}>
            <p className=" ease-in-out duration-300 hover:text-white">
              Places <PiIslandBold></PiIslandBold>
            </p>
          </Link>
          <p className=" ease-in-out duration-300 hover:text-white">
            Info <FaInfo></FaInfo>
          </p>
          <Link href={"https://wa.me/+18493513626"}>
            <p className=" ease-in-out duration-300 hover:text-white">
              Contac us <MdOutlineContactSupport></MdOutlineContactSupport>
            </p>{" "}
          </Link>
        </div>
        <MdMenu className="flex sm:hidden text-4xl" onClick={set}></MdMenu>
      </div>
      {s && (
        <div className="text-white flex sm:hidden flex-col gap-1 bg-blue-900">
          <Link href={"/"}>
            <p className="flex gap-2 items-center p-2  ease-in-out duration-300 hover:text-white ">
              Home <FaHome></FaHome>
            </p>
          </Link>{" "}
          <p className="flex gap-2 items-center p-2  ease-in-out duration-300 hover:text-white ">
            Available <FaFlag></FaFlag>
          </p>
          <Link href={"places"}>
            <p className="flex gap-2  items-center p-2 ease-in-out duration-300 hover:text-white ">
              Places <PiIslandBold></PiIslandBold>
            </p>
          </Link>
          <p className="flex gap-2 items-center p-2  ease-in-out duration-300 hover:text-white ">
            Info <FaInfo></FaInfo>
          </p>
          <Link href={"https://wa.me/+18493513626"}>
            <p className="flex gap-2 items-center p-2 ease-in-out  duration-300 hover:text-white ">
              Contac us <MdOutlineContactSupport></MdOutlineContactSupport>
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

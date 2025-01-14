"use client";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { easeInOut, motion } from "framer-motion";

export default function N1() {
  return (
    <div className="bg-black bg-cover bg-[url('https://a.travel-assets.com/findyours-php/viewfinder/images/res40/116000/116829-Indigenous-Eyes-Ecological-Park.jpg')] h-screen justify-center flex flex-col text-white items-center ">
      {" "}
      <div>
        <FaUmbrellaBeach className="text-7xl mb-10"></FaUmbrellaBeach>
      </div>
      <p className=" text-2xl sm:text-6xl text-center">
        Las mejores experiencias para sus vacaciones
      </p>{" "}
      <div className="mt-10">
        <h1 className="text-xl">TourismJH</h1>
      </div>
    </div>
  );
}

"use client";
import { easeIn, easeInOut, motion } from "framer-motion";
export default function N2() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      transition={{ ease: easeInOut, duration: 0.5, delay: 0.2 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-col justify-center sm:flex-row p-10 gap-10 sm:gap-20"
    >
      {" "}
      <div className="flex flex-col items-center mt-10 sm:w-[400px] gap-2">
        <div className="">
          {" "}
          <h1 className="text-5xl">¿Listo para la</h1>
          <h1 className="text-6xl sm:text-7xl text-blue-600">Aventura?</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          laudantium molestiae libero. Ratione qui, consequatur provident,
          voluptatem aut earum quidem cum natus nam quis corrupti eos, nemo
          nobis aliquid saepe.
        </p>
        <button className="mt-20 bg-blue-500 rounded-sm p-2 text-black text-xl w-64 ease-in-out duration-300 hover:bg-black hover:text-white">
          Search More Places
        </button>
      </div>
      <div className="shadow-xl w-full sm:w-[600px] rounded-x overflow-hidden">
        <ul className=" flex w-max">
          {" "}
          <div className="flex flex-col items-center ease-in-out duration-500">
            <img
              className="w-[330px] sm:w-[600px] h-[300px] sm:h-[500px]"
              src="https://res.cloudinary.com/dmcvdsh4c/image/upload/v1726799604/iceebook/ciencia/hidrologia/rios-caracteristicas-formacion-tipos-partes_cbbull.webp"
              alt=""
            />
            <p className="bg-blue-400 w-full text-center p-2 text-3xl">
              Playas
            </p>
          </div>
          <div className="flex flex-col items-center ease-in-out duration-500">
            <img
              className=" w-[300px] sm:w-[600px] h-[300px] sm:h-[500px]"
              src="https://res.cloudinary.com/dmcvdsh4c/image/upload/v1726799604/iceebook/ciencia/hidrologia/rios-caracteristicas-formacion-tipos-partes_cbbull.webp"
              alt=""
            />
            <p className="bg-blue-400 w-full text-center p-2 text-3xl">
              Playas
            </p>
          </div>
        </ul>{" "}
      </div>
    </motion.div>
  );
}

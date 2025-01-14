"use client";
import { MdOutlinePlace } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";

export default function N2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ ease: easeInOut, duration: 0.5, delay: 0.2 }}
      whileInView={{ opacity: 1 }}
      className="p-10 flex flex-col gap-10  items-center"
    >
      <h1 className="text-4xl">¿Que tenemos para ofrecerles?</h1>
      <ul className="w-full items-center flex justify-center flex-wrap gap-10">
        <li className="flex  flex-col gap-2 items-center ease-in-out duration-200 p-2  hover:text-blue-400">
          <MdOutlinePlace className="sm:text-5xl" /> <strong className="sm:text-2xl">Lugar de establecimiento</strong>
          <p>lorem blablalblalblalblalblallnblalbla</p>
        </li>
        <li className="flex  flex-col gap-2 items-center ease-in-out duration-200 p-2  hover:text-blue-400">
          <MdOutlinePlace className="sm:text-5xl" /> <strong className="sm:text-2xl">Lugar de establecimiento</strong>
          <p>lorem blablalblalblalblalblallnblalbla</p>
        </li>
        <li className="flex  flex-col gap-2 items-center ease-in-out duration-200 p-2  hover:text-blue-400">
          <MdOutlinePlace className="sm:text-5xl" /> <strong className="sm:text-2xl">Lugar de establecimiento</strong>
          <p>lorem blablalblalblalblalblallnblalbla</p>
        </li>
        <li className="flex  flex-col gap-2 items-center ease-in-out duration-200 p-2  hover:text-blue-400">
          <MdOutlinePlace className="sm:text-5xl" /> <strong className="sm:text-2xl">Lugar de establecimiento</strong>
          <p>lorem blablalblalblalblalblallnblalbla</p>
        </li>
        <li className="flex  flex-col gap-2 items-center ease-in-out duration-200 p-2  hover:text-blue-400">
          <MdOutlinePlace className="sm:text-5xl" /> <strong className="sm:text-2xl">Lugar de establecimiento</strong>
          <p>lorem blablalblalblalblalblallnblalbla</p>
        </li>
        <li className="flex  flex-col gap-2 items-center ease-in-out duration-200 p-2  hover:text-blue-400">
          <MdOutlinePlace className="sm:text-5xl" /> <strong className="sm:text-2xl">Lugar de establecimiento</strong>
          <p>lorem blablalblalblalblalblallnblalbla</p>
        </li>
      
      </ul>
    </motion.div>
  );
}

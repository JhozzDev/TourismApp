"use client"

import NavBar from "@/components/navbar";
import N1 from "@/components/N1";
import N2 from "@/components/N2";
import N3 from "@/components/N3";
import N4 from "@/components/N4";
import N5 from "@/components/N5";
import Loading from "@/components/Loading";
import { FaQuestionCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
setTimeout(()=>{setLoading(null)}, 2000)
  }, [])
  return (
    <div>
      {loading && <Loading></Loading>}
      {!loading && (
        <div className="flex flex-col gap-20">
          {" "}
          <FaQuestionCircle className=" hidden sm:flex fixed w-12 h-20  top-60 left-[93%] ease-in-out duration-1000 text-blue-600 hover:animate-bounce hover:text-black"></FaQuestionCircle>
          <NavBar></NavBar>
          <N1></N1>
          <N2></N2>
          <N4></N4>  
          <N5></N5>
          <N3></N3>
        </div>
      )}
    </div>
  );
}

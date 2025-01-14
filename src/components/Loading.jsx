import { FaUmbrellaBeach } from "react-icons/fa6";
export default function Loading() {
  return (
    <div className="bg-blue-500 flex items-center justify-center w-screen h-screen">
      <FaUmbrellaBeach className="text-6xl text-white animate-ping "></FaUmbrellaBeach>
    </div>
  );
}

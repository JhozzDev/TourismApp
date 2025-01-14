import PlaceCard from "./PlaceCard";
export default function N4() {
  return (
    <div className="overflow-hidden">
      <ul className="overflow-scroll w-full h-96 sm:h-[430px] flex flex-col justify-center items-center sm:flex-row flex-wrap">
        <li className="w-full justify-center items-center flex h-full bg-blue-900">
          <img className="bg-blue-900" src="" alt="" />
          <h1 className=" text-6xl p-4 text-white hover:scale-125">Samana</h1>
        </li>
        <li className="w-full justify-center items-center flex h-full bg-red-900">
          <img className="bg-red-900" src="" alt="" />
          <h1 className=" text-6xl p-4 text-white hover:scale-125">
            La Romana
          </h1>
        </li>
      </ul>
    </div>
  );
}

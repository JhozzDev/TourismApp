import { IoArrowDown } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";

export default function PlaceCard({ isTrue }) {
  return (
    <li className="border-2 rounded-sm w-[300px] h-[400px] bg-blue-500 flex flex-col gap-2 ease-in-out duration-500  hover:border-blue-500">
      <img
        className=" h-64"
        src="https://capellimon.com/wp-content/uploads/2021/02/28608335556_97d51dbc73_b.jpg"
        alt=""
      />
      <div className="w-[300px]  h-[400px] absolute p-2 flex flex-col-reverse justify-between">
        <div className="">
          <h2 className="text-4xl">El puente</h2>
          <h1 className="text-xl">Samana</h1>
        </div>
        <p className="m-2 text-4xl text-green-600 text-end"><strong>$100</strong></p>
      </div>
    </li>
  );
}

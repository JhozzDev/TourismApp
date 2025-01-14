import PlaceCard from "@/components/PlaceCard";
import NavBar from "@/components/navbar";

export default function Places() {
  return (
    <div>
      {" "}
      <NavBar></NavBar>
      <div className="flex flex-col gap-10 p-10">
        <h1 className="mt-20 text-5xl text-blue-500">Places</h1>
        <div className="mt-10">
          <input type="text" className="border-2 border-blue-500 p-2 w-64 sm:w-96 " placeholder="Busque su lugar Favorito :)"/>
        </div>
        <ul className="flex items-center gap-10 flex-wrap">
          <PlaceCard isTrue={true}></PlaceCard>
          <PlaceCard isTrue={true}></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard isTrue={true}></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
          <PlaceCard></PlaceCard>
        </ul>
      </div>
    </div>
  );
}

import PlaceCard from "./PlaceCard";
export default function N5() {
  return (
    <div className="flex flex-col p-10 justify-center">
      <h1 className="text-5xl text-blue-500">Our Tours Trip</h1>
      <p>It's time to Travel</p>
      <ul className="mt-10 flex flex-wrap items-center justify-center gap-2">
    <PlaceCard></PlaceCard>
    <PlaceCard></PlaceCard>
    <PlaceCard></PlaceCard>
    <PlaceCard></PlaceCard>
      </ul>
    </div>
  );
}

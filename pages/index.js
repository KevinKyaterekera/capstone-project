import CityPicture from "@/components/Citypictures";
import { travel } from "@/data/data";
import TravelOverview from "@/components/TravelOverview";

export default function HomePage() {
  return (
    <div>
      <h1>Travel details</h1>
      <CityPicture />
      <TravelOverview />
    </div>
  );
}

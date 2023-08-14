import { travel, user } from "@/data/data";
import Image from "next/image";

export default function TravelOverview() {
  return (
    <article>
      {travel.map((trip) => {
        return (
          <>
            <section>📍{trip.name}</section>
            <section>
              {TravelDetails()}
              {trip.timePeriod}
            </section>
          </>
        );
      })}
    </article>
  );
}

function TravelDetails() {
  return (
    <Image
      src="/images/user-icon.svg"
      width={30}
      height={30}
      alt="A user icon"
    />
  );
}

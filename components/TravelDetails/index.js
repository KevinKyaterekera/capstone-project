import { travel, user } from "@/data/data";
import Image from "next/image";
import { styled } from "styled-components";

export default function TravelOverview() {
  return (
    <article>
      {travel.map((trip) => {
        return (
          <>
            <section>
              {trip.name}
              <br />
              📍{trip.destination}
            </section>

            <section>
              {UserIcon()}
              <p>Time-period: {trip.timePeriod}</p>
            </section>
          </>
        );
      })}
    </article>
  );
}

function UserIcon() {
  return (
    <Image
      src="/images/user-icon.svg"
      width={30}
      height={30}
      alt="A user icon"
    />
  );
}

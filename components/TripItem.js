import { styled } from "styled-components";
import Link from "next/link";

export default function TripItem({ currentTrips }) {
  return (
    <ul>
      {currentTrips.map((trip) => (
        /*using dynamic routes redirect to the detail page with a user friendyl*/
        <StyledListItem key={trip.tripId}>
          {/* using map function to receive correct data from trips*/}
          <StyledLink href={`/TripDetailPage/${trip.slug}`}>
            <ImageFitBox>
              <StyledImage
                src="/images/london.jpg"
                alt="This is a picture of the destination city"
              />
            </ImageFitBox>
            <span />
            <article>
              <h4>{trip.tripName}</h4>
              <p>📍{trip.tripDestination}</p>
            </article>
          </StyledLink>
        </StyledListItem>
      ))}
    </ul>
  );
}

const StyledListItem = styled.li`
  width: 75%;
  list-style: none;
`;

const StyledLink = styled(Link)`
  gap: 1rem;
  color: black;
  border: 0.5px solid black;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  text-decoration: none;
`;

const ImageFitBox = styled.div`
  width: 65%;
  height: 15%;
`;

const StyledImage = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 0.6rem;
`;

import { styled } from "styled-components";
import Link from "next/link";

export default function TripItem({ currentTrips, setCurrentTrips }) {
  console.log(currentTrips);
  return (
    <ul>
      {currentTrips.map((trip) => (
        <StyledListItem key={trip.name}>
          {/* using map function to receive correct data from trips*/}
          <StyledLink href="/TripDetailPage">
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
  margin: auto;
  list-style: none;
  width: 75%;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  padding: 0rem 0.5rem;
  text-decoration: none;
  color: black;
`;

const ImageFitBox = styled.div`
  width: 50px;
  height: 50px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
`;

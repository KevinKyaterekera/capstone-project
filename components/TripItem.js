import { styled } from "styled-components";
import Link from "next/link";

export default function TripItem({ currentTrips }) {
  return (
    <StyledFrame>
      {currentTrips.map((trip) => (
        <StyledListItem key={trip.tripId}>
          <StyledLink href={`/TripDetailPage/${trip.tripId}`}>
            <ImageFitBox>
              <StyledImage
                src="/images/london.jpg"
                alt="This is a picture of the destination city"
              />
            </ImageFitBox>
            <span />
            <article>
              <h4>{trip.tripName}</h4>
              <StyledCityName>📍{trip.tripDestination}</StyledCityName>
            </article>
          </StyledLink>
        </StyledListItem>
      ))}
    </StyledFrame>
  );
}

const StyledFrame = styled.ul`
  margin: 50px 20px;
  width: 300px;
  gap: 2rem;
`;

const StyledListItem = styled.li`
  list-style: none;
  height: 104px;
  margin-left: -50px;
`;

const StyledLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #ece9ef;
    transform: translateY(-10px);
    transition: background-color 0.3s ease, transform 0.3s ease-in-out;
  }
`;

const ImageFitBox = styled.div`
  margin: 5px 2px;
`;

const StyledImage = styled.img`
  width: 91px;
  height: 84px;
  border-radius: 10px;
  align-self: stretch;
`;

const StyledCityName = styled.p`
  color: #8b8688;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

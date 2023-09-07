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
              <StyledTripName>{trip.tripName}</StyledTripName>
              <StyledCityName>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99999 11.1917C11.4359 11.1917 12.6 10.0276 12.6 8.59167C12.6 7.15573 11.4359 5.99167 9.99999 5.99167C8.56405 5.99167 7.39999 7.15573 7.39999 8.59167C7.39999 10.0276 8.56405 11.1917 9.99999 11.1917Z"
                    stroke="#25131A"
                    stroke-width="1.5"
                  />
                  <path
                    d="M3.01666 7.075C4.65832 -0.141667 15.35 -0.133334 16.9833 7.08333C17.9417 11.3167 15.3083 14.9 13 17.1167C11.325 18.7333 8.67499 18.7333 6.99166 17.1167C4.69166 14.9 2.05832 11.3083 3.01666 7.075Z"
                    stroke="#25131A"
                    stroke-width="1.5"
                  />
                </svg>
                {trip.tripDestination}
              </StyledCityName>
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

const StyledTripName = styled.h4`
  margin-left: 10px;
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
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

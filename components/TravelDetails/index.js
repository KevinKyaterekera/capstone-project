import { styled } from "styled-components";
import UserIcon from "../UserIcon";
import TimePeriod from "./TimePeriod";

export default function TravelOverview({ currentTrips, setCurrentTrips }) {
  return (
    <>
      {currentTrips.map((trip) => (
        <FlexContainer key={trip.name}>
          <article>
            {trip.tripName}
            <br />
            📍{trip.tripDestination}
          </article>
          <FlexArticle>
            <UserIcon />
            <TimePeriod
              currentTrips={currentTrips}
              setCurrentTrips={setCurrentTrips}
            />
          </FlexArticle>
        </FlexContainer>
      ))}
    </>
  );
}

const FlexArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 0.5rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

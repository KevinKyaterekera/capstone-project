import { styled } from "styled-components";

export default function TimePeriod({ currentTrips, setCurrentTrips }) {
  return (
    <>
      {currentTrips.map((trip) => (
        <FlexContainer key={trip.tripId}>
          <p>Time-period: </p>
          {trip.tripStart}
          <br />
          {trip.tripEnd}
        </FlexContainer>
      ))}
    </>
  );
}
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

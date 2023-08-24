import { styled } from "styled-components";
import TripItem from "@/components/TripItem";
import PrimaryLink from "@/components/PrimaryLink";

export default function ListOverview({ currentTrips, setCurrentTrips }) {
  const noTripsPlanned = currentTrips.length < 1;
  if (noTripsPlanned) {
    return (
      <FlexContainer>
        <h2>Travel details</h2>
        <h3>Currently no trips planned 🥲</h3>
        <PrimaryLink href="/FormPage">Add new trip</PrimaryLink>
      </FlexContainer>
    );
  }
  return (
    <FlexContainer>
      <h2>Upcoming trips</h2>
      <TripItem currentTrips={currentTrips} setCurrentTrips={setCurrentTrips} />
      <PrimaryLink href="/FormPage">Add new trip</PrimaryLink>
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  gap: 0.6rem;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

import { styled } from "styled-components";
import TripItem from "@/components/TripItem";
import PrimaryLink from "@/components/PrimaryLink";
import Searchbar from "@/components/Searchbar";

export default function ListOverview({ currentTrips }) {
  const noTripsPlanned = currentTrips.length < 1;
  if (noTripsPlanned) {
    return (
      <FlexContainer>
        <h2>Travel details</h2>
        <Searchbar currentTrips={currentTrips} />
        <h3>Currently no trips planned 🥲</h3>
        <PrimaryLink href="/FormPage">Add new trip</PrimaryLink>
      </FlexContainer>
    );
  }
  return (
    <FlexContainer>
      <h2>Upcoming trips</h2>
      <Searchbar currentTrips={currentTrips} />
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
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

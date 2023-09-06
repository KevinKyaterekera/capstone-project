import { styled } from "styled-components";
import PrimaryLink from "@/components/PrimaryLink";
import Searchbar from "@/components/Searchbar";
import CalenderSvg from "@/components/CalenderSvg";

export default function ListOverview({ currentTrips }) {
  const noTripsPlanned = currentTrips.length < 1;
  if (noTripsPlanned) {
    return (
      <FlexContainer>
        <h2>TravelTribe</h2>
        <Searchbar currentTrips={currentTrips} />
        <CalenderSvg />
        <h2>No upcoming trips</h2>
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

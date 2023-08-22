import { styled } from "styled-components";
import TripItem from "@/components/TripItem";
import PrimaryLink from "@/components/PrimaryLink";
import App from "./_app"; /* use this import to render the form data from the app.js */

export default function ListOverview({ currentTrips, setCurrentTrips }) {
  return (
    <FlexContainer>
      <h2>Upcoming trips</h2>
      <TripItem currentTrips={currentTrips} setCurrentTrips={setCurrentTrips} />
      <PrimaryLink href="/FormPage">Add new trip</PrimaryLink>
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

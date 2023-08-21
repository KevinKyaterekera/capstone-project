import { styled } from "styled-components";
import { travel } from "@/data/data";
import TripItem from "@/components/TripItem";
import NewTripButton from "@/components/CreateTripButton";

export default function ListOverview({ name, destination }) {
  return (
    <FlexContainer>
      <h2>Upcoming trips</h2>
      <TripItem />
      <NewTripButton>Add new trip</NewTripButton>
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

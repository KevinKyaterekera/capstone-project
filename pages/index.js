import { styled } from "styled-components";
import TripItem from "@/components/TripItem";
import PrimaryLink from "@/components/PrimaryLink";

export default function ListOverview() {
  return (
    <FlexContainer>
      <h2>Upcoming trips</h2>
      <TripItem />
      <PrimaryLink href="/FormPage">Add new trip</PrimaryLink>
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

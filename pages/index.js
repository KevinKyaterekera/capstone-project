import { styled } from "styled-components";
import { travel } from "@/data/data";
import TripItem from "@/components/TripItem";
import Link from "next/link";

export default function ListOverview({ name, destination }) {
  return (
    <FlexContainer>
      <h2>Upcoming trips</h2>
      <TripItem />
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

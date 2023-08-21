import { styled } from "styled-components";
import { travel } from "@/data/data";
import TripItem from "@/components/TripItem";
import DirectToFormPage from "@/components/SubmitButton";
export default function ListOverview({ name, destination }) {
  return (
    <FlexContainer>
      <h2>Upcoming trips</h2>
      <TripItem />
      <DirectToFormPage href="/FormPage">Add new trip</DirectToFormPage>
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

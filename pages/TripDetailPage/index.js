import { useState } from "react";
import DestinationImage from "@/components/DestinationImage";
import TravelOverview from "@/components/TravelDetails";
import { styled } from "styled-components";
import CircularButton from "@/components/BackButton";

export default function HomePage() {
  return (
    <FlexContainer>
      <h2>Travel details</h2>
      <DestinationImage />
      <TravelOverview />
      <CircularButton>Back to overview</CircularButton>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

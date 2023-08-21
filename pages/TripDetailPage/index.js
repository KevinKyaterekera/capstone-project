import { useState } from "react";
import DestinationImage from "@/components/DestinationImage";
import TravelOverview from "@/components/TravelDetails";
import { styled } from "styled-components";
import DirectToOverviewButton from "@/components/CircularButton";

export default function HomePage() {
  return (
    <FlexContainer>
      <h2>Travel details</h2>
      <DestinationImage />
      <TravelOverview />
      <DirectToOverviewButton />
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
`;

import DestinationImage from "@/components/DestinationImage";
import TravelOverview from "@/components/TravelDetails";
import { styled } from "styled-components";

export default function HomePage() {
  return (
    <FlexContainer>
      <h2>Travel details</h2>
      <DestinationImage />
      <TravelOverview />
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
`;

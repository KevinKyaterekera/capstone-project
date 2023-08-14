import CityPicture from "@/components/Citypictures";
import TravelOverview from "@/components/TravelOverview";
import { styled } from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4em;
`;

export default function HomePage() {
  return (
    <FlexContainer>
      <h1>Travel details</h1>
      <CityPicture />
      <TravelOverview />
    </FlexContainer>
  );
}

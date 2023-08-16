import { styled } from "styled-components";
import { travel } from "@/data/data";

const traveldetails = travel[0];

export default function TimePeriod() {
  return (
    <FlexContainer>
      <p>Time-period: </p>
      {traveldetails.timePeriod}
    </FlexContainer>
  );
}
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

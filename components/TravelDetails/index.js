import { travel } from "@/data/data";
import { styled } from "styled-components";
import UserIcon from "../UserIcon";
import TimePeriod from "./TimePeriod";

const trip = travel[0];

export default function TravelOverview() {
  return (
    <FlexContainer>
      <article>
        {trip.name}
        <br />
        📍{trip.destination}
      </article>
      <FlexArticle>
        <UserIcon />
        <TimePeriod />
      </FlexArticle>
    </FlexContainer>
  );
}

const FlexArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 0.5rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

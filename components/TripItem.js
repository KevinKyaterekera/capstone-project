import { styled } from "styled-components";
import { travel } from "@/data/data";

const travelList = travel[0];

export default function TripItem() {
  return (
    <StyledListOverview>
      <ImageFitBox>
        <StyledImage
          src="/images/london.jpg"
          alt="This is a picture of the destination city"
        />
      </ImageFitBox>
      <span />
      <ContentDetails />
    </StyledListOverview>
  );
}

const StyledListOverview = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  width: 75%;
  gap: 1rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  padding: 0rem 0.5rem;
`;

const ImageFitBox = styled.div`
  width: 50px;
  height: 50px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
`;

function ContentDetails() {
  return (
    <article>
      <h4>{travelList.name}</h4>
      <p>📍{travelList.destination}</p>
    </article>
  );
}

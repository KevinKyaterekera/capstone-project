import { styled } from "styled-components";
import { travel } from "@/data/data";
import Link from "next/link";

const travelList = travel[0];

export default function TripItem() {
  return (
    <StyledListItem>
      <StyledLink href="/TripDetailPage">
        <ImageFitBox>
          <StyledImage
            src="/images/london.jpg"
            alt="This is a picture of the destination city"
          />
        </ImageFitBox>
        <span />
        <ContentDetails />
      </StyledLink>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  list-style: none;
  width: 75%;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  padding: 0rem 0.5rem;
  text-decoration: none;
  color: black;
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

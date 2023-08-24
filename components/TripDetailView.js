import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function TravelOverview({ trip, deleteTrip }) {
  return (
    <>
      <FlexContainer key={trip.tripId}>
        <article>
          {trip.tripName}
          <br />
          📍{trip.tripDestination}
        </article>
        <FlexArticle>
          <FlexContainer>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g id="about">
                <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
                <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
              </g>
            </svg>
            {trip.tripUser}
          </FlexContainer>
          <FlexContainer>
            <p>Time-period: </p>
            {trip.tripStart}
            <br />
            {trip.tripEnd}
          </FlexContainer>
        </FlexArticle>

        {/* This still needs to be connected to the id of the trip */}
        <StyledDeleteButton onClick={deleteTrip}>
          <svg
            width={20}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </StyledDeleteButton>
      </FlexContainer>
    </>
  );

  function onClickDelete(id) {
    const deleteTrip = currentTrips.filter((trip) => {
      if (trip.id === id) {
        return false;
      } else {
        return true;
      }
    });
    deleteTrip(deleteTrip);
  }
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

const StyledDeleteButton = styled.button`
  &:hover {
    background-color: transparent;
  }
`;

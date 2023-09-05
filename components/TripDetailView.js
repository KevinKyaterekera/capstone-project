import { styled } from "styled-components";
import PrimaryLink from "./PrimaryLink";

export default function TravelOverview({ trip, handleDelete, tripId, todos }) {
  /* page 2 detail view*/
  const handleOpenDialog = () => {
    deleteDialog.showModal();
  };

  return (
    <>
      <FlexContainer key={trip.tripId}>
        <article>
          {trip.tripName}
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
            {trip.tripUser && trip.tripUser.join(", ")}
          </FlexContainer>
          <FlexContainer>
            {/* This links to the TaskManagerPage */}
            <PrimaryLink href={`/TripDetailPage/TaskPage/${tripId}`}>
              You have:
              {todos.filter((todo) => todo.tripId === tripId).length} task left
            </PrimaryLink>
            <p>Time-period: </p>
            {trip.tripStart}
            {trip.tripEnd}
          </FlexContainer>
        </FlexArticle>
        <StyledDeleteButton onClick={handleOpenDialog}>
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
      <DeleteDialog id="deleteDialog">
        <p>You are about to delete this trip. Are you sure?</p>
        <form method="dialog">
          <ButtonContainer>
            <CancelButton>Cancel</CancelButton>
            <PrimaryLink href="/">
              <DeleteButton onClick={() => handleDelete(trip)}>
                Yes!
              </DeleteButton>
            </PrimaryLink>
          </ButtonContainer>
        </form>
      </DeleteDialog>
    </>
  );
}

const FlexArticle = styled.article`
  gap: 4rem;
  border: 0.5px solid black;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const FlexContainer = styled.div`
  gap: 1.6rem;
  border: 0.5px solid black;
  padding: 0.5rem;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
`;

const StyledDeleteButton = styled.button`
  &:hover {
    background-color: transparent;
  }
`;

const CancelButton = styled.button`
  border: 0.5px solid black;
`;

const DeleteButton = styled.button`
  border: 0.5px solid black;
`;

const DeleteDialog = styled.dialog`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

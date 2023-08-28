import { styled } from "styled-components";

export default function SelectedParticipants({ participants, handleDeselect }) {
  return (
    <ul>
      {participants.map((participant) => (
        <FlexContainer key={participant.tripUser}>
          <StyledListItem>{participant.tripUser}</StyledListItem>
          <button onClick={() => handleDeselect(participant)}>X</button>
        </FlexContainer>
      ))}
    </ul>
  );
}

const FlexContainer = styled.div`
  gap: 1.6rem;
  display: flex;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

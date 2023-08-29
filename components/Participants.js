import { styled } from "styled-components";

export default function SelectedParticipants({ participants, handleDeselect }) {
  return (
    <ul>
      {participants.map((participant) => (
        <>
          <StyledListItem key={participant}>{participant}</StyledListItem>
          {/* this button will remove the participant selection*/}
          <button onClick={() => handleDeselect(participant)}>X</button>
        </>
      ))}
    </ul>
  );
}

const StyledListItem = styled.li`
  list-style: none;
  gap: 1.6rem;
  display: flex;
`;

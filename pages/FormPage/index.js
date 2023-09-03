import Form from "@/components/Form";
import { styled } from "styled-components";

export default function CreateTripForm({
  currentTrips,
  setCurrentTrips,
  submitNewTrip,
  handleDelete,
  participants,
  submitParticipant,
  handleDeselect,
  setParticipants,
}) {
  return (
    <FlexContainer>
      <h2>Create your trip</h2>
      <Form
        currentTrips={currentTrips}
        setCurrentTrips={setCurrentTrips}
        submitNewTrip={submitNewTrip}
        handleDelete={handleDelete}
        participants={participants}
        submitParticipant={submitParticipant}
        handleDeselect={handleDeselect}
        setParticipants={setParticipants}
      />
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  gap: 1.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

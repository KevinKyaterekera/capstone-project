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
    <>
      <StyledHeader>Create your tribe</StyledHeader>
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
    </>
  );
}
const StyledHeader = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

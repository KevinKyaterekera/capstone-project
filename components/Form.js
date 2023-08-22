import { styled } from "styled-components";
import PrimaryLink from "./PrimaryLink";

export default function Form({ currentTrips, setCurrentTrips }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newTripObject = {
      tripName: data.name,
      tripDestination: data.destination,
    };
    setCurrentTrips([...currentTrips, newTripObject]);
    event.target.reset();
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name of your trip:
        <StyledInput
          type="text"
          name="name"
          placeholder="e.g. culinary trip, language study travel"
          required
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Destination:
        <StyledInput
          type="text"
          name="destination"
          placeholder="e.g. Barcelona"
          required
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Start date:
        <StyledInput
          type="date"
          name="date"
          placeholder="Choose a start date"
          required
        ></StyledInput>
      </label>
      <label htmlFor="name">
        End date:
        <StyledInput
          type="date"
          name="date"
          placeholder="Choose a end date"
          required
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Your budget:
        <StyledInput
          type="number"
          name="budget"
          placeholder="e.g. 500,00"
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Who will join you?
        <StyledInput
          type="text"
          name="user"
          placeholder="Choose a friend to travel with"
        ></StyledInput>
      </label>
      <StyledButton type="submit">Create your trip</StyledButton>
      <PrimaryLink href="/">Back to overview</PrimaryLink>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5;
`;

const StyledInput = styled.input`
  width: 90%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  width: 90%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid black;
`;

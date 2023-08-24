import { styled } from "styled-components";
import PrimaryLink from "./PrimaryLink";
import { uid } from "uid";
const slugify = require("slugify");

export default function Form({ submitNewTrip }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newTripObject = {
      tripId: uid(),
      tripName: data.name,
      slug: slugify(data.name, { lower: true }),
      tripDestination: data.destination,
      tripUser: data.user,
      tripStart: data.startdate,
      tripEnd: data.enddate,
    };

    submitNewTrip(newTripObject);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name of your trip:
        <StyledInput
          id="name"
          type="text"
          name="name"
          placeholder="e.g. culinary trip, language study travel"
          required
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Destination:
        <StyledInput
          id="destination"
          type="text"
          name="destination"
          placeholder="e.g. Barcelona"
          required
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Start date:
        <StyledInput
          id="startdate"
          type="date"
          name="startdate"
          placeholder="Choose a start date"
          required
        ></StyledInput>
      </label>
      <label htmlFor="name">
        End date:
        <StyledInput
          id="enddate"
          type="date"
          name="enddate"
          placeholder="Choose a end date"
          required
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Your budget:
        <StyledInput
          id="budget"
          type="number"
          name="budget"
          placeholder="e.g. 500,00"
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Who will join you?
        <StyledInput
          id="user"
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
  gap: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5;
`;

const StyledInput = styled.input`
  width: 90%;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const StyledButton = styled.button`
  width: 90%;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

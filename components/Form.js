import { styled } from "styled-components";
import PrimaryLink from "./PrimaryLink";
import { uid } from "uid";
import slugify from "slugify";

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
    if (data.enddate < data.startdate) {
      window.alert("End date can not be before start date!");
    }
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
          required
          autoFocus
          maxLength="20"
          pattern="[A-Za-z0-9À-ž\s]{2,}"
          placeholder="e.g. culinary trip, language study travel"
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Destination:
        <StyledInput
          id="destination"
          type="text"
          name="destination"
          required
          maxLength="30"
          pattern="[A-Za-z0-9À-ž\s]{2,}"
          placeholder="e.g. Barcelona"
        ></StyledInput>
      </label>
      <label htmlFor="startdate">
        Start date:
        <StyledInput
          id="startdate"
          type="date"
          name="startdate"
          placeholder="Choose a start date"
          required
        ></StyledInput>
      </label>
      <label htmlFor="enddate">
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
          min="0"
          placeholder="e.g. 500,00"
        ></StyledInput>
      </label>
      <label htmlFor="name">
        Who will join you?
        <StyledInput
          id="user"
          type="text"
          name="user"
          pattern="[A-Za-z0-9À-ž\s]{2,}"
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

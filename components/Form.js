import { styled } from "styled-components";
import BackLink from "./PrimaryLink";
import { uid } from "uid";
import SelectedParticipants from "./Participants";
import { useState } from "react";

export default function Form({
  submitNewTrip,
  submitParticipant,
  participants,
  setParticipants,
  handleDeselect,
}) {
  const [currentParticipant, setCurrentParticipant] = useState("");
  const [tripDescription, setTripDescription] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (currentParticipant.trim() !== "") {
        submitParticipant(currentParticipant);
        setCurrentParticipant("");
      }
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newTripObject = {
      tripId: uid(),
      tripName: data.name,
      tripDestination: data.destination,
      tripDescription: tripDescription,
      tripUser: participants,
      tripStart: data.startdate,
      tripEnd: data.enddate,
    };
    let isValid = true;
    if (data.enddate < data.startdate) {
      window.alert("End date can not be before start date!");
      isValid = false;
    }

    const currentDate = new Date();
    const selectedStartDate = new Date(data.startdate);
    if (selectedStartDate < currentDate - 1) {
      window.alert("You can only plan trips in the future 😌");
      isValid = false;
    }
    if (!isValid) {
      return;
    }

    submitNewTrip(newTripObject);
    setParticipants([]);
  }

  return (
    <StyledDiv>
      <StyledBackLink href="/">🔙</StyledBackLink>
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
            required
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
            placeholder="👥 Choose a friend to travel with"
            value={currentParticipant}
            onChange={(event) => setCurrentParticipant(event.target.value)}
            onKeyPress={handleKeyPress}
          ></StyledInput>
        </label>
        <SelectedParticipants
          participants={participants}
          handleDeselect={handleDeselect}
        />
        <label htmlFor="description">
          Trip Description (max 300 characters):
          <StyledTextarea
            id="description"
            name="description"
            rows="5"
            maxLength="300"
            value={tripDescription}
            onChange={(event) => setTripDescription(event.target.value)}
          ></StyledTextarea>
        </label>
        <StyledButton type="submit">Create your trip</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: #747688;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 23px;
`;

const StyledInput = styled.input`
  width: 317px;
  height: 56px;
  display: flex;
  border-radius: 12px;
  border: 1px solid #c2bdbd;
  background: #fff;
  &::placeholder {
    color: #747688;
    font-size: 14px;
    line-height: 23px;
    opacity: 40%;
  }
`;

const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  background-color: #4fabf7;
  color: #eee;
  font-size: 18px;
  color: white;
  width: 246px;
  height: 52px;
  cursor: pointer;
  border-radius: 15px;
  border-style: none;
  text-decoration: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #096fc3;
  }
`;

const StyledBackLink = styled(BackLink)`
  display: flex;
  align-items: self-start;
  background-color: #4fabf7;
  width: 50px;
  background-color: transparent;
  box-shadow: none;
  &:hover {
    background-color: red;
  }
`;

const StyledTextarea = styled.textarea`
  width: 317px;
  height: 90px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  border: 1px solid #c2bdbd;
  word-break: break-all;
  background: #fff;
  &::placeholder {
    color: #747688;
    font-size: 14px;
    line-height: 23px;
    opacity: 40%;
  }
`;

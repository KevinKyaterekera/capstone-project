import { styled } from "styled-components";
import PrimaryLink from "@/components/PrimaryLink";
import Searchbar from "@/components/Searchbar";
import CalenderSvg from "@/components/CalenderSvg";

export default function ListOverview({ currentTrips }) {
  const noTripsPlanned = currentTrips.length < 1;
  if (noTripsPlanned) {
    return (
      <FlexContainer>
        <HeaderContainer>
          <StyledLogo src="/images/logo.png" alt="Logo" />
        </HeaderContainer>
        <CalenderSvg />
        <h2>No upcoming trips</h2>
        <PrimaryLink href="/FormPage">Add new trip</PrimaryLink>
      </FlexContainer>
    );
  }
  return (
    <FlexContainer>
      <h2>Upcoming trips</h2>
      <Searchbar currentTrips={currentTrips} />
      <PrimaryLink href="/FormPage">Add new trip</PrimaryLink>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 20px;
  margin-bottom: 85px;
`;
const StyledLogo = styled.img`
  height: 140px;
  width: 150px;
  border-radius: 30%;
`;

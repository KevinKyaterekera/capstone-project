import DestinationImage from "@/components/DestinationImage";
import PrimaryLink from "@/components/PrimaryLink";
import TravelDetailView from "@/components/TripDetailView";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function CategoryPage({
  currentTrips,
  handleDelete,
  handleDeselect,
  todos,
  addTodo,
  setValue,
  deleteTodo,
}) {
  const router = useRouter();
  const { tripId } = router.query;
  const trip = currentTrips.find((trip) => trip.tripId === tripId);
  if (!trip) {
    return null;
  }

  return (
    <FlexContainer>
      <DestinationImage />
      {<StyledHeader>Travel details</StyledHeader>}
      <TravelDetailView
        trip={trip}
        handleDelete={handleDelete}
        handleDeselect={handleDeselect}
        tripId={tripId}
        todos={todos}
        addTodos={addTodo}
        setValue={setValue}
        deleteTodo={deleteTodo}
      />
      <BackLink href="/">Back to overview</BackLink>
    </FlexContainer>
  );
}
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 415px) {
  }
`;
const StyledHeader = styled.h2`
  color: white;
  z-index: 1;
`;

const BackLink = styled(PrimaryLink)`
  margin: 40px 15px;
`;

import DestinationImage from "@/components/DestinationImage";
import PrimaryLink from "@/components/PrimaryLink";
import TravelDetailView from "@/components/TripDetailView";
import { useRouter } from "next/router";
import { styled } from "styled-components";

/* router page 2 */
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
      <h2>Travel details</h2>
      <DestinationImage />
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
      <PrimaryLink href="/">Back to overview</PrimaryLink>
    </FlexContainer>
  );
}
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

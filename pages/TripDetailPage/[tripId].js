import DestinationImage from "@/components/DestinationImage";
import PrimaryLink from "@/components/PrimaryLink";
import TravelOverview from "@/components/TripDetailView";
import { useRouter } from "next/router";
import { styled } from "styled-components";

/* router page 2 */
export default function CategoryPage({
  currentTrips,
  handleDelete,
  handleDeselect,
  handleEdit,
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
      <TravelOverview
        trip={trip}
        handleDelete={handleDelete}
        handleDeselect={handleDeselect}
        handleEdit={handleEdit}
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
  gap: 1.3rem;
  width: 75%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

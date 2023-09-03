import TaskForm from "@/pages/TripDetailPage/TaskPage";
import { useRouter } from "next/router";

export default function CreateTaskForm({
  currentTrips,
  todos,
  setValue,
  addTodo,
}) {
  const router = useRouter();
  const { tripId } = router.query;
  const trip = currentTrips.find((trip) => trip.tripId === tripId);
  if (!trip) {
    return null;
  }
  return (
    <TaskForm
      todos={todos}
      tripId={tripId}
      setValue={setValue}
      addTodo={addTodo}
    />
  );
}

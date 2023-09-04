import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [currentTrips, setCurrentTrips] = useLocalStorageState("trips", {
    defaultValue: [],
  });
  const [participants, setParticipants] = useState([]);

  function submitParticipant(newParticipant) {
    setParticipants([...participants, newParticipant]);
  }
  function handleDeselect(removeParticipant) {
    const participantFiltered = participants.filter(
      (participant) => participant !== removeParticipant
    );
    setParticipants(participantFiltered);
  }

  const router = useRouter();
  function submitNewTrip(newTrip) {
    setCurrentTrips([...currentTrips, newTrip]);
    router.push("/");
  }
  function handleDelete(removeThisTrip) {
    const tripsFiltered = currentTrips.filter(
      (trip) => trip.tripId !== removeThisTrip.tripId
    );
    router.push("/");
    setCurrentTrips(tripsFiltered);
  }

  const [value, setValue] = useState();
  const [todos, setTodos] = useLocalStorageState("todo", {
    defaultValue: [],
  });

  const addTodo = (todoText) => {
    const newTodo = { text: todoText, tripId };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        currentTrips={currentTrips}
        setCurrentTrips={setCurrentTrips}
        submitNewTrip={submitNewTrip}
        handleDelete={handleDelete}
        participants={participants}
        setParticipants={setParticipants}
        submitParticipant={submitParticipant}
        handleDeselect={handleDeselect}
        todos={todos}
        setTodos={setTodos}
        value={value}
        setValue={setValue}
        addTodo={addTodo}
      />
    </>
  );
}

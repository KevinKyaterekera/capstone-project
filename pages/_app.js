import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  /* define the state and the initial data from your array by setting defaultValue to travel. use localstoragestate to keep the entries persistent*/
  const [currentTrips, setCurrentTrips] = useLocalStorageState("trips", {
    defaultValue: [],
  });

  /* creating and removing of participants in the form .js */
  const [participants, setParticipants] = useState([]);

  function submitParticipant(newParticipant) {
    setParticipants([...participants, newParticipant]);
  }

  function handleDeselect(removeParticipant) {
    const participantFiltered = participants.filter(
      (participant) =>
        participant !==
        removeParticipant /* think about using a proper naming like .tripUser */
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
      (trip) => trip.slug !== removeThisTrip.slug
    );
    router.push("/");
    setCurrentTrips(tripsFiltered);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        /* making the state value accessible for other components  */
        currentTrips={currentTrips}
        setCurrentTrips={setCurrentTrips}
        /* all new trip submissions should render the start page*/
        submitNewTrip={submitNewTrip}
        /* making delete function globally accessible */
        handleDelete={handleDelete}
        participants={participants}
        setParticipants={setParticipants}
        submitParticipant={submitParticipant}
        handleDeselect={handleDeselect}
      />
    </>
  );
}

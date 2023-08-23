import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  /* define the state and the initial data from your array by setting defaultValue to travel. use localstoragestate to keep the entries persistent*/
  const [currentTrips, setCurrentTrips] = useLocalStorageState("trips", {
    defaultValue: [],
  });

  const router = useRouter();
  function submitNewTrip(newTrip) {
    setCurrentTrips([...currentTrips, newTrip]);
    router.push("/");
  }

  function deleteTrip(tripsNotFiltered) {
    setCurrentTrips(tripsNotFiltered);
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
        deleteTrip={deleteTrip}
      />
    </>
  );
}

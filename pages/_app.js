import GlobalStyle from "../styles";
import Form from "@/components/Form";
import useLocalStorageState from "use-local-storage-state";
import TripItem from "@/components/TripItem";
import { travel } from "@/data/data";

export default function App({ Component, pageProps }) {
  /* define the state and the initial data from your array by setting defaultValue to travel. use localstoragestate to keep the entries persistent*/
  const [currentTrips, setCurrentTrips] = useLocalStorageState("trips", {
    defaultValue: [123],
  });

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        /* making the state value accessible for other components  */
        currentTrips={currentTrips}
        setCurrentTrips={setCurrentTrips}
      />
    </>
  );
}

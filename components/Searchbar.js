import React, { useState } from "react";
import TripItem from "./TripItem";

export default function Searchbar({ currentTrips }) {
  const [searchInput, setSearchInput] = useState("");

  const filteredTrips = currentTrips.filter((trip) => {
    if (searchInput == "") {
      return true;
    } else {
      const searchTerm = searchInput.toLowerCase();
      return (
        trip.tripName.toLowerCase().includes(searchTerm) ||
        trip.tripDestination.toLowerCase().includes(searchTerm)
      );
    }
  });
  return (
    <>
      <input
        type="text"
        placeholder="Search here ..."
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
      <TripItem currentTrips={filteredTrips} />
    </>
  );
}

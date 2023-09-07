import React, { useState } from "react";
import TripItem from "./TripItem";
import { styled } from "styled-components";

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
      <StyledSearchBar
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
      <TripItem currentTrips={filteredTrips} />
    </>
  );
}

const StyledSearchBar = styled.input`
  width: 340px;
  padding: 13px 20px;
  border-style: none;
  border-radius: 10px;
  background: #f3f3f3;
  box-shadow: 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01),
    0px 50px 100px 0px rgba(0, 0, 0, 0.04),
    0px 50px 100px 0px rgba(0, 0, 0, 0.05);
  & ::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }
  &:hover {
    background-color: #c1e3ff;

    transform: translateY(-10px);
    transition: background-color 0.3s ease, transform 0.3s ease-in-out;
  }
`;

import DestinationImage from "@/components/DestinationImage";
import PrimaryLink from "@/components/PrimaryLink";
import TravelOverview from "@/components/TripDetailView";
import { useRouter } from "next/router";
import { styled } from "styled-components";

/* receive and pass the handleDelete function in order to use it in the TravelOverview */
export default function CategoryPage({ currentTrips, handleDelete }) {
  const router = useRouter();
  const { slug } = router.query;
  const trip = currentTrips.find((trip) => slug === trip.slug);
  if (!trip) {
    return null;
  }
  return (
    <FlexContainer>
      <h2>Travel details</h2>
      <DestinationImage />
      <TravelOverview trip={trip} handleDelete={handleDelete} />
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

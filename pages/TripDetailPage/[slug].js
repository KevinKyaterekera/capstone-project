import DestinationImage from "@/components/DestinationImage";
import PrimaryLink from "@/components/PrimaryLink";
import TravelOverview from "@/components/TripDetailView";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function CategoryPage({ currentTrips }) {
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
      <TravelOverview trip={trip} />
      <PrimaryLink href="/">Back to overview</PrimaryLink>
    </FlexContainer>
  );
}
const FlexContainer = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
`;

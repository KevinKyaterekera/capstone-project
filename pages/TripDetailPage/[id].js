import { useRouter } from "next/router";

export default function CategoryPage({ currentTrips }) {
  const router = useRouter();
  const trip = currentTrips.find(({ id }) => id == router.query.id);
  if (!trip) {
    return null;
  }
}

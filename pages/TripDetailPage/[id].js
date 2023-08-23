import { useRouter } from "next/router";

export default function CategoryPage({ currentTrips }) {
  const router = useRouter();
  const trip = currentTrips.find(({ id }) => id == router.query.id);
  const currentPage = router.query.id;
  if (!currentPage) {
    return null;
  }
}

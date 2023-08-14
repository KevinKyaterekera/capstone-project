import Image from "next/image";

export default function CityPicture() {
  return (
    <Image
      src="/images/london.jpg"
      width={250}
      height={250}
      alt="This is a picture of the destinated city"
    />
  );
}

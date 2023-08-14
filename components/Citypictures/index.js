import Image from "next/image";

export default function CityPicture() {
  return (
    <Image
      src="/images/london.jpg"
      width={500}
      height={500}
      alt="This is a picture of the destinated city"
    />
  );
}

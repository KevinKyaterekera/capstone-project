import Image from "next/image";
import { styled } from "styled-components";

export default function DestinationImage() {
  return (
    <StyledImage
      src="/images/london.jpg"
      width={300}
      height={250}
      alt="This is a picture of the destinated city"
    />
  );
}

const StyledImage = styled(Image)`
  border-radius: 0.8rem;
`;

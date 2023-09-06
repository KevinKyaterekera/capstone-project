import Image from "next/image";
import { styled } from "styled-components";

export default function DestinationImage() {
  return (
    <StyledImage
      src="/images/london.jpg"
      width={380}
      height={350}
      alt="This is a picture of the destinated city"
    />
  );
}

const StyledImage = styled(Image)`
  border-radius: 0.8rem;
`;

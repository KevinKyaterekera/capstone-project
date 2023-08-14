import Image from "next/image";
import { styled } from "styled-components";

export default function DestinationImage() {
  return (
    <StyledImage>
      <Image
        src="/images/london.jpg"
        width={400}
        height={400}
        alt="This is a picture of the destinated city"
      />
    </StyledImage>
  );
}

const StyledImage = styled.div`
  margin-bottom: 25px;
`;

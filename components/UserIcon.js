import { user } from "@/data/data";
import { styled } from "styled-components";

const tripmember = user[0];

export default function UserIcon() {
  return (
    <FlexContainer>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g id="about">
          <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
          <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
        </g>
      </svg>
      {tripmember.name}
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  border: 0.5px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

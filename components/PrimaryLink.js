import Link from "next/link";
import { styled } from "styled-components";

export default styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4fabf7;
  color: #eee;
  padding-bottom: 0%;
  text-align: center;
  font-size: 18px;
  color: white;
  width: 246px;
  height: 52px;
  cursor: pointer;
  border-radius: 15px;
  text-decoration: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #096fc3;
  }
`;

import styled from "styled-components";

export const ContainerParentTextarea = styled.textarea`
  padding-left: 3rem;
  border-radius: 1.5rem;
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 2rem;

  :active {
    background-color: #cff5e7;
  }
  &:hover {
    border: 3px solid #cff5e7;
  }
`;

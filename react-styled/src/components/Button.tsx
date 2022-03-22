import styled, { css } from "styled-components";

interface IButtonProps {
  primary?: boolean;
  color?: string;
}

export const Button = styled.button`
  background-color: pink;
  color: ${(props: IButtonProps) => props.color || "black"};
  border: 1px solid grey;
  border-radius: 3px;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;

  ${(props: IButtonProps) =>
    props.primary &&
    css`
      background-color: black;
      color: pink;
    `}
`;

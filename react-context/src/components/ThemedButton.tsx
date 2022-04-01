import { useContext } from "react";
import styled from "styled-components";
import { ITheme, ThemeContext } from "../contexts/ThemeContext";

interface IButtonProps {
  theme: ITheme;
}

export const Button = styled.button`
  background-color: ${(props: IButtonProps) => props.theme.background};
  color: ${(props: IButtonProps) => props.theme.color};
  padding: 1rem;
`;

interface IThemedButtonProps {
  children: string;
  onClick?: () => void;
}

export const ThemedButton = (props: IThemedButtonProps) => {
  const theme: ITheme = useContext(ThemeContext);

  return (
    <Button theme={theme} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

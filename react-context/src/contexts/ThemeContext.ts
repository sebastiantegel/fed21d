import React from "react";
import { createContext } from "react";

export interface ITheme {
  background: string;
  color: string;
}

export interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  dark: {
    background: "green",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  },
};

export const ThemeContext = React.createContext<ITheme>(themes.light);

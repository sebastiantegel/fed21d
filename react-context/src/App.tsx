import React, { useState } from "react";
import "./App.css";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";
import styled from "styled-components";
import { ThemedButton } from "./components/ThemedButton";

interface IStyledAppProps {
  theme: ITheme;
}

const StyledApp = styled.div`
  background-color: ${(props: IStyledAppProps) => props.theme.background};
  color: ${(props: IStyledAppProps) => props.theme.color};
`;

function App() {
  const [theme, setTheme] = useState<ITheme>(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  const handleClick = () => {
    console.log("Du klickade på lorem");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <StyledApp theme={theme}>
        <ThemedButton onClick={toggleTheme}>Hej hej</ThemedButton>
      </StyledApp>
      <ThemedButton onClick={handleClick}>Lorem</ThemedButton>
    </ThemeContext.Provider>
  );
}

export default App;

import React, { useState } from "react";
import { ApplicationProvider } from "react-native-ui-kitten";
import { mapping } from "@eva-design/eva";
import AppNavigator from "./src/navigation/AppNavigator";
import themes, { themeNames } from "./src/constants/Themes";
const App = () => {
  // Default vars
  const light = themeNames[0];
  const dark = themeNames[1];
  const [theme, setTheme] = useState(light);

  // toggles between light or dark theme
  const toggleTheme = () => {
    const nextTheme = theme === light ? dark : light;
    setTheme(nextTheme);
  };

  return (
    <ApplicationProvider mapping={mapping} theme={themes[theme]}>
      <AppNavigator toggleTheme={toggleTheme} />
    </ApplicationProvider>
  );
};

export default App;

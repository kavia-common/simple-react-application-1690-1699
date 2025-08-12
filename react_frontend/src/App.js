import React, { useState } from "react";
import "./App.css";
import "./styles/common.css";

import Header from "./components/Header";
import RegularScreen from "./screens/Regular";
import DoubleViewScreen from "./screens/DoubleView";
import DateRangeSelectedScreen from "./screens/DateRangeSelected";

/**
 * PUBLIC_INTERFACE
 * App
 * Main application shell. Provides a minimal header with navigation to switch between
 * Figma-derived demo screens: Regular, Double-view, and Date range selected.
 *
 * Returns:
 *  The full application layout with header and the currently selected screen content.
 */
function App() {
  const [screen, setScreen] = useState("regular");

  /**
   * PUBLIC_INTERFACE
   * handleNavigate
   * Changes the current screen.
   * @param {string} next - one of "regular" | "double" | "range"
   */
  const handleNavigate = (next) => {
    setScreen(next);
  };

  let content = null;
  switch (screen) {
    case "double":
      content = <DoubleViewScreen />;
      break;
    case "range":
      content = <DateRangeSelectedScreen />;
      break;
    case "regular":
    default:
      content = <RegularScreen />;
  }

  return (
    <div className="App app-root">
      <Header currentScreen={screen} onNavigate={handleNavigate} />
      <div className="app-content" role="region" aria-label="Screen content">
        {content}
      </div>
    </div>
  );
}

export default App;

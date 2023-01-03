import React from "react";
import { useTheme } from "next-themes";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="light-mode">
      <span className="icon">
        {theme === "light" ? <NightsStayIcon /> : <WbSunnyIcon />}
      </span>
      <button
        className={
          theme === "light" ? "light-mode-switch active" : "light-mode-switch"
        }
        onClick={handleMode}
      />
    </div>
  );
};

export { ThemeSwitch };

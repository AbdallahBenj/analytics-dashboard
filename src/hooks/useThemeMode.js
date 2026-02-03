import { useEffect } from "react";

const useThemeMode = ({ selected, systemMode = "" }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rootElement = document.documentElement;

    const setMode = (mode) => {
      rootElement.setAttribute("data-theme", mode);
      localStorage.setItem("theme", mode);
    };

    if (selected === "system") {
      setMode(systemMode);
    } else {
      setMode(selected);
    }
  }, [selected, systemMode]);
};

export default useThemeMode;

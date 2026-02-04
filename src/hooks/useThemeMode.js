import { useEffect } from "react";

const useThemeMode = ({ selected, systemMode = "" }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rootElement = document.documentElement;
    const activeMode = selected === "system" ? systemMode : selected;

    rootElement.setAttribute("data-theme", activeMode);
    localStorage.setItem("theme", selected);
  }, [selected, systemMode]);
};

export default useThemeMode;

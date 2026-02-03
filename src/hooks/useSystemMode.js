import { useState, useEffect } from "react";

const useSystemMode = () => {
  const [systemTheme, setSystemTheme] = useState("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    const setTheme = (isDark) => {
      setSystemTheme(isDark ? "dark" : "light");
    };

    setTheme(systemDark.matches);

    const eventHandler = (e) => setTheme(e.matches);

    systemDark.addEventListener("change", eventHandler);
    return () => systemDark.removeEventListener("change", eventHandler);
  }, []);
  return systemTheme;
};

export default useSystemMode;

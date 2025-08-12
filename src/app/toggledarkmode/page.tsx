"use client";
import { createContext, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const Theme = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const router = useRouter();
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? styles.dark : styles.light}>
        <h1>Toggle Theme</h1>
        <h2>{isDarkMode ? "Dark Theme" : "Light Theme"}</h2>
        <button onClick={toggleDarkMode}>Toggle Theme</button>
        <div>&nbsp;</div>
        <button onClick={() => router.push("/")}>Back to Home</button>
      </div>
    </ThemeContext.Provider>
  );
};

export default Theme;

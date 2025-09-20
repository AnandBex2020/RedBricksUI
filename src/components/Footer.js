import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme, themeClasses } = useTheme();

  return (
    <footer className={`p-4 text-center ${themeClasses[theme].footer}`}>
      <p>© 2025 RedBricks. All rights reserved.</p>
    </footer>
  );
}

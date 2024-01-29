"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemeSwitcher = ({ children, className }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  // Prevent Hydration error
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => switchTheme()} className={className} type="button">
      {resolvedTheme === "dark" ? <HiMoon /> : <HiSun />}
      {children}
    </button>
  );
};

export default ThemeSwitcher;

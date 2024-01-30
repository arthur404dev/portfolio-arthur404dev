"use client";
import { navigation } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type SectionName = (typeof navigation)[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

const ActiveSectionContextProvider = ({ children }: Props) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContextProvider",
    );
  }
  return context;
};

export default ActiveSectionContextProvider;

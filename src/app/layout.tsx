import { Header, NavBar, ThemeProvider } from "@/components";
import { ActiveSectionContextProvider } from "@/context";
import type { Metadata } from "next";
import { JetBrains_Mono, Poppins, Raleway } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio - Arthur Andrade Software Engineer",
  description:
    "Arthur Andrade, experienced Fullstack Software Engineer, more than 15 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${poppins.variable} ${raleway.variable} theme-latte bg-gradient-to-b from-theme-base via-theme-mantle to-theme-crust text-theme-text dark:theme-mocha`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <Header />
            <NavBar />
            {children}
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

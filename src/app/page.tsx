import {
  About,
  Contact,
  Divider,
  Experience,
  Hero,
  Projects,
} from "@/components";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-32 font-poppins">
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

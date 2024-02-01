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
    <main className="container flex min-h-screen flex-col items-center justify-center gap-4 font-poppins sm:gap-8 md:gap-16 lg:gap-32">
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

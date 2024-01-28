import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <h1>Arthur's Portfolio</h1>
      <Button className="dark:bg-theme-mauve dark:hover:bg-theme-lavender">
        Testing Shadcn
      </Button>
    </main>
  );
}

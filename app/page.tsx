import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Strip } from "@/components/Strip";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Strip />
      <Work />
      <About />
      <Approach />
      <CTA />
      <Footer />
    </main>
  );
}

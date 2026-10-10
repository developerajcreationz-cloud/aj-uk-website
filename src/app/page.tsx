import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { HomeOverview } from "@/components/sections/home-overview";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HomeOverview />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

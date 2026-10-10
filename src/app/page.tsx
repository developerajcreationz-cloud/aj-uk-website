import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HomeOverview } from "@/components/home-overview";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

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

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { HomeIntro } from "@/components/sections/home-intro";
import { Services } from "@/components/sections/services";
import { HomeWhy } from "@/components/sections/home-why";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { HomeFaq } from "@/components/sections/home-faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HomeIntro />
        <Services />
        <HomeWhy />
        <Work />
        <About />
        <Testimonials />
        <Contact />
        <HomeFaq />
      </main>
      <Footer />
    </>
  );
}

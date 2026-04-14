import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const AboutIcoop = dynamic(() => import("./components/AboutIcoop"));
const WhyIcoop = dynamic(() => import("./components/WhyIcoop"));
const Features = dynamic(() => import("./components/Features"));
const Pricing = dynamic(() => import("./components/Pricing"));
const CTA = dynamic(() => import("./components/CTA"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutIcoop />
        <WhyIcoop />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DashboardPreview from "./components/DashboardPreview";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AboutIcoop from "./components/AboutIcoop";
import WhyIcoop from "./components/WhyIcoop";

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
        {/* <Problem />
        
        <HowItWorks />
        <DashboardPreview />
        <Testimonials />
        <CTA /> */}
      </main>
      <Footer />
    </>
  );
}

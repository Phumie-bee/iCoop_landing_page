import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const AboutIcoop = dynamic(() => import("./components/AboutIcoop"));
const WhyIcoop = dynamic(() => import("./components/WhyIcoop"));
const Features = dynamic(() => import("./components/Features"));
const AccountingAutomation = dynamic(
  () => import("./components/AccountingAutomation"),
);
const Reporting = dynamic(() => import("./components/Reporting"));
const ControlsSecurity = dynamic(
  () => import("./components/ControlsSecurity"),
);
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
        <AccountingAutomation />
        <Reporting />
        <ControlsSecurity />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

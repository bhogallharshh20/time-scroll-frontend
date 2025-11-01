import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CreateCapsule from "@/components/CreateCapsule";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CreateCapsule />
      <Footer />
    </div>
  );
};

export default Index;

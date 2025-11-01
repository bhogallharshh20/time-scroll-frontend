import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CreateCapsule from "@/components/CreateCapsule";
import CapsuleGallery from "@/components/CapsuleGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CreateCapsule />
      <CapsuleGallery />
      <Footer />
    </div>
  );
};

export default Index;

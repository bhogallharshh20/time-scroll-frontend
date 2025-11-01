import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-capsule.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Preserve Your Memories</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Digital Time Capsule
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Capture today's moments and unlock them in the future. Create meaningful time capsules filled with memories, messages, and media to rediscover later.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-glow hover:shadow-soft transition-all"
                onClick={() => document.getElementById('create-capsule')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Clock className="mr-2 h-5 w-5" />
                Create Your Capsule
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start text-sm text-muted-foreground">
              <div>
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div>Capsules Created</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div>Memories Preserved</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">5K+</div>
                <div>Happy Users</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 animate-pulse-glow">
              <img
                src={heroImage}
                alt="Digital time capsule visualization with glowing holographic elements"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

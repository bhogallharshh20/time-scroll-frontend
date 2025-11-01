import { Clock, Edit3, Upload, Calendar } from "lucide-react";

const steps = [
  {
    icon: Edit3,
    title: "Create Your Capsule",
    description: "Start by writing messages, adding photos, or recording your thoughts.",
  },
  {
    icon: Upload,
    title: "Add Your Memories",
    description: "Upload photos, videos, documents, and anything you want to preserve.",
  },
  {
    icon: Calendar,
    title: "Set Unlock Date",
    description: "Choose when you want to open your capsule - from tomorrow to years ahead.",
  },
  {
    icon: Clock,
    title: "Wait & Rediscover",
    description: "When the time comes, unlock your capsule and relive those precious moments.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating your digital time capsule is simple and takes just a few minutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative animate-fadeIn"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shadow-soft">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

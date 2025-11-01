import { Clock, Lock, Image, Calendar, Heart, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Time-Locked Content",
    description: "Set a future date to unlock your memories. From days to decades ahead.",
  },
  {
    icon: Image,
    title: "Rich Media Support",
    description: "Store photos, videos, voice notes, and documents all in one place.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your memories are encrypted and protected with industry-standard security.",
  },
  {
    icon: Calendar,
    title: "Event Reminders",
    description: "Get notified when your time capsules are ready to be opened.",
  },
  {
    icon: Heart,
    title: "Personal Journal",
    description: "Document your thoughts, feelings, and life moments for your future self.",
  },
  {
    icon: Share2,
    title: "Collaborative Capsules",
    description: "Create shared capsules with friends and family for group memories.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Time Capsules</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to preserve and rediscover your precious memories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm animate-fadeIn group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

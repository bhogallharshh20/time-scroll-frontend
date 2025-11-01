import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Upload, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CreateCapsule = () => {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    unlockDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your time capsule has been created! (Frontend demo)");
  };

  return (
    <section id="create-capsule" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Create Your <span className="bg-gradient-primary bg-clip-text text-transparent">Time Capsule</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start preserving your memories for the future
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-soft animate-fadeIn border-border/50" style={{ animationDelay: "0.2s" }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-base">Capsule Title</Label>
              <Input
                id="title"
                placeholder="Give your capsule a meaningful name..."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">Your Message</Label>
              <Textarea
                id="message"
                placeholder="Write a message to your future self or loved ones..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[200px] resize-none"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="unlockDate" className="text-base flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Unlock Date
              </Label>
              <Input
                id="unlockDate"
                type="date"
                value={formData.unlockDate}
                onChange={(e) => setFormData({ ...formData, unlockDate: e.target.value })}
                className="h-12"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer group">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <p className="text-muted-foreground mb-2">
                <span className="text-primary font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-sm text-muted-foreground">
                Photos, videos, documents (Frontend demo)
              </p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-primary mb-1">Privacy Notice</p>
                <p className="text-muted-foreground">
                  Your capsule will be securely encrypted and only accessible on the unlock date you set.
                </p>
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg py-6 shadow-glow hover:shadow-soft transition-all"
            >
              <Lock className="mr-2 h-5 w-5" />
              Seal Time Capsule
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default CreateCapsule;

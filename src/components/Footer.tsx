import { Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Digital Time Capsule</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © 2025 Digital Time Capsule. Preserve your memories for the future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

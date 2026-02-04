import { Button } from "@/components/ui/button";
import { ArrowRight, Play, LayoutDashboard, MapPin, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const quickLinks = [
    {
      icon: LayoutDashboard,
      title: "Dispatcher Dashboard",
      description: "Manage loads & drivers",
      href: "/dashboard",
      iconBg: "bg-accent",
    },
    {
      icon: MapPin,
      title: "Driver Portal",
      description: "Full earnings transparency",
      href: "/driver-portal",
      iconBg: "bg-destructive",
    },
    {
      icon: Brain,
      title: "AI Brain",
      description: "Explainable decisions",
      href: "/ai-brain",
      iconBg: "bg-primary",
    },
  ];

  return (
    <section className="relative min-h-screen hero-gradient grid-pattern overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">AI-Powered Dispatch Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Smarter Dispatch.</span>
            <br />
            <span className="text-gradient">Transparent Operations.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transform your freight operations with AI-driven load matching, real-time driver transparency, and explainable decision-making that builds trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/dashboard">
                Open Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg ${link.iconBg} flex items-center justify-center shrink-0`}>
                  <link.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {link.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Sparkles, MapPin, Brain, Shield, DollarSign, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Smart Load Matching",
      description: "AI-powered algorithms match loads with the best available drivers based on location, capacity, and delivery requirements.",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track every shipment in real-time with GPS precision. Know exactly where your freight is at any moment.",
    },
    {
      icon: Brain,
      title: "Explainable AI",
      description: "Every AI recommendation comes with clear reasoning. Understand why decisions are made, not just what they are.",
    },
    {
      icon: Shield,
      title: "Driver Trust Score",
      description: "Build trust through transparency. Drivers see exactly how their performance affects their assignments.",
    },
    {
      icon: DollarSign,
      title: "Earnings Transparency",
      description: "Complete visibility into pay breakdowns, fuel costs, and profit margins for every single load.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Deep insights into fleet performance, driver efficiency, and operational bottlenecks.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Powerful Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Optimize Dispatch
          </h2>
          <p className="text-muted-foreground text-lg">
            From intelligent load matching to transparent driver compensation, our platform provides the tools you need to run a modern, efficient operation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

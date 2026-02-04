import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Brain, Lightbulb, CheckCircle2, AlertTriangle, TrendingUp, Truck } from "lucide-react";

const AIBrain = () => {
  const decisions = [
    {
      id: 1,
      type: "Load Assignment",
      title: "Assigned LD-001 to John Smith",
      reasoning: [
        "Driver is 12 miles from pickup location (closest available)",
        "Has 98% on-time delivery rating for this route",
        "Truck capacity matches load requirements",
        "Driver preferences indicate availability",
      ],
      confidence: 94,
      status: "approved",
    },
    {
      id: 2,
      type: "Route Optimization",
      title: "Suggested alternative route for LD-004",
      reasoning: [
        "I-5 traffic incident detected (45 min delay expected)",
        "Alternative via US-101 saves 28 minutes",
        "Fuel cost difference: +$12 (offset by time savings)",
        "Customer delivery window maintained",
      ],
      confidence: 87,
      status: "pending",
    },
    {
      id: 3,
      type: "Pricing Recommendation",
      title: "Adjusted rate for Dallas-Houston lane",
      reasoning: [
        "Spot market rates increased 8% this week",
        "Fuel surcharge should increase to $0.52/mile",
        "Competitor analysis shows room for adjustment",
        "Historical data supports pricing increase",
      ],
      confidence: 91,
      status: "approved",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle2 className="w-5 h-5 text-accent" />;
      case "pending": return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">AI Brain</h1>
            <p className="text-muted-foreground">Explainable AI decisions that you can trust and understand.</p>
          </div>

          {/* AI Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Decisions Today</span>
              </div>
              <div className="text-3xl font-bold text-foreground">147</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Accuracy Rate</span>
              </div>
              <div className="text-3xl font-bold text-foreground">96.2%</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Loads Optimized</span>
              </div>
              <div className="text-3xl font-bold text-foreground">2,847</div>
            </div>
          </div>

          {/* Decision Cards */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Recent AI Decisions</h2>
            {decisions.map((decision) => (
              <div key={decision.id} className="rounded-xl bg-card border border-border overflow-hidden">
                <div className="p-6 border-b border-border flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{decision.type}</div>
                      <h3 className="text-lg font-semibold text-foreground">{decision.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Confidence</div>
                      <div className="font-bold text-primary">{decision.confidence}%</div>
                    </div>
                    {getStatusIcon(decision.status)}
                  </div>
                </div>
                <div className="p-6 bg-secondary/30">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Why this decision?</h4>
                  <ul className="space-y-2">
                    {decision.reasoning.map((reason, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIBrain;

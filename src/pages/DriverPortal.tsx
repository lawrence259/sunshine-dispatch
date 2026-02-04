import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DollarSign, TrendingUp, Truck, Star, Fuel, Clock } from "lucide-react";

const DriverPortal = () => {
  const earnings = [
    { label: "Base Pay", amount: "$1,250.00" },
    { label: "Fuel Bonus", amount: "$85.00" },
    { label: "On-Time Bonus", amount: "$50.00" },
    { label: "Fuel Cost", amount: "-$320.00" },
  ];

  const recentLoads = [
    { id: "LD-098", route: "LA → Phoenix", earnings: "$420", distance: "370 mi", date: "Today" },
    { id: "LD-097", route: "Phoenix → Tucson", earnings: "$180", distance: "115 mi", date: "Yesterday" },
    { id: "LD-096", route: "Tucson → LA", earnings: "$485", distance: "485 mi", date: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Driver Portal</h1>
            <p className="text-muted-foreground">Full transparency into your earnings and performance.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Stats */}
            <div className="lg:col-span-2 space-y-6">
              {/* Performance Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">Trust Score</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">4.9</div>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Loads This Week</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">12</div>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">On-Time Rate</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">98%</div>
                </div>
              </div>

              {/* Recent Loads */}
              <div className="rounded-xl bg-card border border-border">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Recent Loads</h2>
                </div>
                <div className="divide-y divide-border">
                  {recentLoads.map((load) => (
                    <div key={load.id} className="p-6 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-foreground">{load.id}</div>
                        <div className="text-sm text-muted-foreground">{load.route} · {load.distance}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-accent">{load.earnings}</div>
                        <div className="text-sm text-muted-foreground">{load.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Earnings Breakdown */}
            <div className="space-y-6">
              <div className="rounded-xl bg-card border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-foreground">This Week</h2>
                  <span className="text-sm text-accent flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12%
                  </span>
                </div>
                <div className="text-4xl font-bold text-foreground mb-6">$1,065.00</div>
                <div className="space-y-4">
                  {earnings.map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className={`font-medium ${item.amount.startsWith('-') ? 'text-destructive' : 'text-foreground'}`}>
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-semibold text-foreground">Net Earnings</span>
                  <span className="text-xl font-bold text-accent">$1,065.00</span>
                </div>
              </div>

              <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Fuel className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Fuel Efficiency</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your fuel efficiency is 15% above average. Keep it up to maximize your earnings!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DriverPortal;

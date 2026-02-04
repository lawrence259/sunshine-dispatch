import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Clock, DollarSign, TrendingUp, Users, Package, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const loads = [
    { id: "LD-001", origin: "Los Angeles, CA", destination: "Phoenix, AZ", status: "In Transit", driver: "John Smith", eta: "2h 15m" },
    { id: "LD-002", origin: "Dallas, TX", destination: "Houston, TX", status: "Pending", driver: "Unassigned", eta: "-" },
    { id: "LD-003", origin: "Chicago, IL", destination: "Detroit, MI", status: "Delivered", driver: "Maria Garcia", eta: "Completed" },
    { id: "LD-004", origin: "Seattle, WA", destination: "Portland, OR", status: "In Transit", driver: "David Lee", eta: "45m" },
  ];

  const stats = [
    { label: "Active Loads", value: "24", icon: Package, trend: "+12%" },
    { label: "Available Drivers", value: "18", icon: Users, trend: "+5%" },
    { label: "On-Time Rate", value: "98%", icon: Clock, trend: "+2%" },
    { label: "Today's Revenue", value: "$45.2K", icon: DollarSign, trend: "+8%" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit": return "bg-primary/10 text-primary";
      case "Pending": return "bg-yellow-100 text-yellow-700";
      case "Delivered": return "bg-accent/10 text-accent";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dispatcher Dashboard</h1>
              <p className="text-muted-foreground">Manage loads, drivers, and operations in real-time.</p>
            </div>
            <Button variant="accent">
              <Package className="w-4 h-4" />
              New Load
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-accent flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend}
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Loads Table */}
          <div className="rounded-xl bg-card border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Active Loads</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Load ID</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Route</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Driver</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">ETA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {loads.map((load) => (
                    <tr key={load.id} className="hover:bg-secondary/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{load.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-foreground">{load.origin}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="text-foreground">{load.destination}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{load.driver}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(load.status)}`}>
                          {load.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{load.eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

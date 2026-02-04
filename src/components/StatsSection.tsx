const StatsSection = () => {
  const stats = [
    { value: "98%", label: "On-Time Delivery" },
    { value: "2.5M+", label: "Loads Dispatched" },
    { value: "15K+", label: "Active Drivers" },
    { value: "$50M+", label: "Revenue Processed" },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

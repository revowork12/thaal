"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function TrustStats() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-12 md:gap-16">
          <AnimatedCounter target={5} suffix="+" label="Years of Experience" />
          <AnimatedCounter target={100} suffix="+" label="Events Completed" duration={2500} />
          <AnimatedCounter target={10} suffix="+" label="Cities Served" duration={3000} />
        </div>
      </div>
    </section>
  );
}

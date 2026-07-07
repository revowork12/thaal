"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Let&apos;s Plan Together
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Get your free catering quote today and let us make your celebration
            truly unforgettable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              href="https://wa.me/917907199231?text=Hello%20Thaal%20Caters%2C%20I%27d%20like%20to%20get%20a%20free%20catering%20quote%20for%20my%20event."
            >
              Get Your Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

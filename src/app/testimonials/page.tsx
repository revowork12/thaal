"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

const testimonials = [
  {
    quote:
      "Thaal Caterers made our wedding absolutely unforgettable. The attention to detail in every dish was remarkable. Our guests are still raving about the food weeks after the celebration!",
    name: "Priya & Rahul Sharma",
    event: "Wedding Reception",
    rating: 5,
  },
  {
    quote:
      "Professional, punctual, and incredibly talented. The corporate event catering was flawless. From setup to cleanup, everything was handled with utmost professionalism.",
    name: "Amit Khanna",
    event: "Corporate Gala",
    rating: 5,
  },
  {
    quote:
      "The best catering experience we've ever had. From the menu customization to the presentation, everything was perfect. The live counters were a huge hit with our guests!",
    name: "Sunita Patel",
    event: "Birthday Celebration",
    rating: 5,
  },
  {
    quote:
      "We trusted Thaal Caterers for our religious ceremony, and they exceeded every expectation. Authentic flavors, traditional preparations, and impeccable service throughout.",
    name: "Ramesh Gupta",
    event: "Religious Ceremony",
    rating: 5,
  },
  {
    quote:
      "Exceptional service from start to finish. The team was incredibly responsive to our needs and the food quality was outstanding. Highly recommended for any event!",
    name: "Neha & Vikram Singh",
    event: "Wedding Engagement",
    rating: 5,
  },
  {
    quote:
      "Our company has used Thaal Caterers for multiple events now, and they never disappoint. Consistent quality, punctual delivery, and great variety in menus.",
    name: "Rajesh Mehta",
    event: "Corporate Events",
    rating: 5,
  },
  {
    quote:
      "The outdoor catering was phenomenal. Despite the challenging setup, they managed to serve a delicious meal that impressed all our guests. True professionals!",
    name: "Anita Desai",
    event: "Garden Party",
    rating: 5,
  },
  {
    quote:
      "From the initial consultation to the final cleanup, everything was handled with care and attention. The customizable menu options made our event truly special.",
    name: "Vijay Kumar",
    event: "Birthday Celebration",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Testimonials() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from our happy customers about their experience with Thaal
            Caterers
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 md:p-10 border border-beige/60 hover:border-gold/20 transition-all duration-300 relative"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <Quote
                  size={32}
                  className="text-gold/20 absolute top-6 right-6"
                />
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-stone leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-beige pt-4">
                  <p className="font-medium text-charcoal">{t.name}</p>
                  <p className="text-stone text-sm">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://wa.me/917907199231?text=Hello%20Thaal%20Caterers%2C%20I%20want%20to%20share%20my%20feedback%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-medium"
            >
              Share Your Experience &rarr;
            </a>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

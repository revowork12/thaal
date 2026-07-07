"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const categories = [
  {
    title: "Wedding & Celebrations",
    subtitle: "Every love story deserves an extraordinary feast",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85",
    services: [
      "Mehendi Artist Coordination",
      "Haldi Ceremony Catering",
      "Welcome & Hospitality Girls",
      "Premium Wedding Attire Styling",
    ],
    align: "left" as const,
  },
  {
    title: "Catering Excellence",
    subtitle: "From intimate gatherings to grand galas",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=85",
    services: [
      "Wedding & Reception Catering",
      "House Warming Feasts",
      "Birthday Party Catering",
      "Business Event Catering",
    ],
    align: "right" as const,
  },
  {
    title: "Entertainment & Production",
    subtitle: "Curating moments that linger long after the music fades",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=85",
    services: [
      "Professional DJ & Sound System",
      "Sufi & Folk Dance Performances",
      "Nadaswaram & Classical Music",
      "Event MC & Anchoring",
    ],
    align: "left" as const,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function ServicesPreview() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-20 md:mb-28 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-gold font-medium mb-5">
            Complete Event Solutions
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.15] tracking-tight">
            We orchestrate every
            <br />
            <span className="text-primary">element of your occasion</span>
          </h2>
          <div className="mt-6 w-16 h-0.5 bg-gold" />
          <p className="mt-6 text-stone text-base md:text-lg leading-relaxed max-w-xl font-light">
            From the first consultation to the final farewell, Thaal Caters
            brings together a full spectrum of premium event services under one
            roof.
          </p>
        </motion.div>

        <div className="space-y-28 md:space-y-36">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className={`${cat.align === "right" ? "lg:order-2" : "lg:order-1"}`}
              >
                <motion.div
                  className="relative group overflow-hidden rounded-2xl"
                  custom={0}
                  variants={fadeUp}
                >
                  <div className="aspect-[4/5]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              <div
                className={`${cat.align === "right" ? "lg:order-1" : "lg:order-2"}`}
              >
                <motion.div custom={1} variants={fadeUp}>
                  <span className="font-heading text-gold text-sm md:text-base font-semibold tracking-wide">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mt-3 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-stone text-base md:text-lg mt-4 leading-relaxed font-light italic">
                    {cat.subtitle}
                  </p>
                  <div className="mt-2 w-12 h-px bg-gold/50" />
                </motion.div>

                <motion.ul className="mt-8 space-y-3" custom={2} variants={fadeUp}>
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-center gap-4 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0 transition-all duration-300 group-hover:scale-150" />
                      <span className="text-charcoal text-base md:text-lg font-light tracking-wide">
                        {s}
                      </span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div className="mt-10" custom={3} variants={fadeUp}>
                  <Button
                    variant="outline"
                    size="sm"
                    href="https://wa.me/917907199231?text=Hello%20Thaal%20Caters%2C%20I%27d%20like%20to%20know%20more%20about%20your%20event%20services."
                    className="group"
                  >
                    <span className="tracking-wider text-xs uppercase">
                      Enquire About This Service
                    </span>
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

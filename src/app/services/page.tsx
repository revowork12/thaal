"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

const categories = [
  {
    id: "wedding",
    title: "Wedding Services",
    subtitle: "Crafting celebrations as unique as your love",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85",
    description:
      "Your wedding day is a tapestry of traditions, emotions, and cherished moments. We work alongside you to curate every detail — from the mehendi&rsquo;s first swirl to the final farewell.",
    services: [
      { name: "Mehendi Artist", detail: "Intricate henna designs by award-winning artists" },
      { name: "Haldi Ceremony", detail: "Traditional turmeric rituals with full catering" },
      { name: "Welcome Hospitality", detail: "Professional welcome girls & guest coordination" },
      { name: "Premium Wedding Attire", detail: "Curated bridal & groom styling consultation" },
    ],
    align: "left" as const,
  },
  {
    id: "catering",
    title: "Catering Services",
    subtitle: "Gastronomy that elevates every gathering",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=1000&q=85",
    description:
      "At the heart of every great event is unforgettable food. Our culinary team brings together time-honoured recipes and contemporary flair, presented with the finesse of a five-star kitchen.",
    services: [
      { name: "Wedding Catering", detail: "Bespoke multi-cuisine menus for your big day" },
      { name: "House Warming", detail: "Traditional feasts that bless a new beginning" },
      { name: "Birthday Celebrations", detail: "Custom menus from intimate to extravagant" },
      { name: "Business Events", detail: "Corporate catering with seamless professionalism" },
    ],
    align: "right" as const,
  },
  {
    id: "entertainment",
    title: "Entertainment",
    subtitle: "Setting the rhythm for your celebration",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1000&q=85",
    description:
      "The right entertainment transforms an event into an experience. We curate talent that resonates with your audience, ensuring the energy never wavers from the first note to the last dance.",
    services: [
      { name: "DJ Program", detail: "Professional sound systems & curated playlists" },
      { name: "Sufi Dance", detail: "Mesmerising whirling dervish performances" },
      { name: "Nadaswaram", detail: "Traditional classical instrumental ensembles" },
      { name: "Event Anchoring", detail: "Charismatic MCs who command the room" },
    ],
    align: "left" as const,
  },
  {
    id: "support",
    title: "Event Support",
    subtitle: "The backbone of a flawless occasion",
    image:
      "https://images.unsplash.com/photo-1511795409834-432f9113b3c8?w=1000&q=85",
    description:
      "Behind every seamless event is a team that anticipates needs before they arise. Our support services ensure your celebration runs without a hitch, so you can focus on what matters most.",
    services: [
      { name: "Professional Security", detail: "Trained personnel for crowd & access management" },
      { name: "Event Coordination", detail: "End-to-end planning & on-ground management" },
      { name: "Decor & Styling", detail: "Elegant setups tailored to your theme" },
      { name: "Transport & Logistics", detail: "Guest transportation & equipment handling" },
    ],
    align: "right" as const,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Services() {
  return (
    <>
      <section className="relative pt-36 pb-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-gold font-medium mb-5">
              What We Offer
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[1.05] tracking-tight">
              Comprehensive
              <br />
              <span className="text-primary">Event Solutions</span>
            </h1>
            <div className="mt-6 w-16 h-0.5 bg-gold" />
            <p className="mt-6 text-stone text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Four pillars of excellence. One seamless experience.
              From the first consultation to the final farewell, we
              handle every layer of your celebration.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32 md:space-y-44">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                id={cat.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-18 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
              >
                <div
                  className={`${cat.align === "right" ? "lg:order-2" : "lg:order-1"}`}
                >
                  <motion.div
                    className="relative group overflow-hidden rounded-2xl"
                    custom={0}
                    variants={fadeUp}
                  >
                    <div className="aspect-[4/5] lg:aspect-[3/4]">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>

                <div
                  className={`${cat.align === "right" ? "lg:order-1" : "lg:order-2"}`}
                >
                  <motion.div custom={1} variants={fadeUp}>
                    <span className="font-heading text-gold text-base font-semibold tracking-wide">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mt-3 leading-tight">
                      {cat.title}
                    </h2>
                    <p className="text-stone text-base md:text-lg mt-4 leading-relaxed font-light italic">
                      {cat.subtitle}
                    </p>
                    <div className="mt-4 w-12 h-px bg-gold/50" />
                  </motion.div>

                  <motion.p
                    className="mt-6 text-stone leading-relaxed"
                    custom={2}
                    variants={fadeUp}
                  >
                    {cat.description}
                  </motion.p>

                  <motion.div
                    className="mt-10 space-y-5"
                    custom={3}
                    variants={fadeUp}
                  >
                    {cat.services.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-start gap-4 group cursor-default"
                      >
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0 transition-all duration-300 group-hover:scale-125" />
                        <div>
                          <h4 className="font-heading text-lg md:text-xl text-charcoal">
                            {s.name}
                          </h4>
                          <p className="text-stone text-sm mt-0.5">
                            {s.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div className="mt-10" custom={4} variants={fadeUp}>
                    <Button
                      variant="primary"
                      size="md"
                      href={`https://wa.me/917907199231?text=Hello%20Thaal%20Caterers%2C%20I%27d%20like%20to%20enquire%20about%20${encodeURIComponent(cat.title.toLowerCase())}.`}
                    >
                      Enquire About {cat.title}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

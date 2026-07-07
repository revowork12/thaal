"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Users,
  FileText,
  Timer,
  ShieldCheck,
  BadgePercent,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We source the finest, freshest ingredients to ensure every dish bursts with flavor and quality.",
  },
  {
    icon: Users,
    title: "Professional Staff",
    description:
      "Our experienced team delivers impeccable service with attention to every detail.",
  },
  {
    icon: FileText,
    title: "Customized Menus",
    description:
      "Every event is unique. We create personalized menus that reflect your taste and preferences.",
  },
  {
    icon: Timer,
    title: "Timely Service",
    description:
      "We respect your time. Our team ensures everything is perfectly timed and executed.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality checks at every stage ensure the highest standards of food and service.",
  },
  {
    icon: BadgePercent,
    title: "Affordable Packages",
    description:
      "Premium catering doesn't have to break the bank. We offer packages for every budget.",
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
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What sets Thaal Caters apart"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-8 border border-beige/40 hover:border-gold/20 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                <feature.icon size={20} className="text-gold" />
              </div>
              <h3 className="font-heading text-xl text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-3">
        <span className="inline-block w-12 h-0.5 bg-gold" />
        {subtitle && (
          <p className="text-stone text-base md:text-lg font-light max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}

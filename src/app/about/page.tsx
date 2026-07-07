"use client";

import { motion } from "framer-motion";
import { Play, Target, Eye, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

const milestones = [
  { year: "2009", title: "The Beginning", description: "Thaal Caters was founded with a vision to transform catering in the region." },
  { year: "2013", title: "First Major Wedding", description: "Catered our first 1000-guest wedding, setting new standards for excellence." },
  { year: "2016", title: "Corporate Division", description: "Launched dedicated corporate catering services for businesses." },
  { year: "2019", title: "Expansion", description: "Expanded operations to 10+ cities with a growing team of culinary experts." },
  { year: "2022", title: "500 Events Milestone", description: "Celebrated catering 500+ events with unwavering quality and service." },
  { year: "2024", title: "Premium Services", description: "Introduced luxury catering experiences for high-end events." },
];

export default function About() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80"
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
            Our Story
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A journey of passion, excellence, and unforgettable flavors
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm uppercase tracking-[0.3em] font-medium">
                About Us
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal mt-4 mb-6 leading-tight">
                Crafting Culinary
                <br />
                <span className="text-primary">Experiences Since 2009</span>
              </h2>
              <div className="space-y-4 text-stone leading-relaxed">
                <p>
                  Thaal Caters began with a simple belief: great food has the
                  power to make any celebration truly memorable. Over the years,
                  we have grown from a small catering service into one of the
                  most trusted names in the industry.
                </p>
                <p>
                  Our team of passionate chefs, experienced service staff, and
                  dedicated event coordinators work tirelessly to ensure every
                  event we cater exceeds expectations. From intimate family
                  gatherings to grand wedding celebrations, we bring the same
                  level of dedication and excellence to every plate we serve.
                </p>
                <p>
                  We take pride in our ability to blend traditional flavors with
                  contemporary presentations, creating culinary experiences that
                  are both authentic and innovative.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391304fb60?w=800&q=80"
                  alt="Our culinary team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="font-heading text-3xl font-bold">15+</p>
                <p className="text-white/70 text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To deliver exceptional culinary experiences that make every celebration unforgettable, with unwavering commitment to quality and service.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "To be the most trusted and preferred catering partner, known for innovation, excellence, and warm hospitality across every event we serve.",
              },
              {
                icon: Award,
                title: "Our Values",
                description:
                  "Quality, integrity, innovation, and customer satisfaction are at the heart of everything we do. We treat every event as our own celebration.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-beige/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-stone leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in the Thaal Caters story"
          />

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-beige hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  className="relative pl-0 md:pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="hidden md:flex absolute left-4 top-1 w-8 h-8 rounded-full bg-gold items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <div className="bg-ivory rounded-2xl p-6 md:p-8">
                    <span className="font-heading text-gold text-2xl font-bold">
                      {milestone.year}
                    </span>
                    <h3 className="font-heading text-xl text-charcoal mt-2 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-stone">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

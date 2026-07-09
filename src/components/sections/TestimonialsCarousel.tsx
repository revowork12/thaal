"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Thaal Caters made our wedding absolutely unforgettable. The attention to detail in every dish was remarkable. Our guests are still raving about the food!",
    name: "Priya & Rahul Sharma",
    event: "Wedding Reception",
    rating: 5,
  },
  {
    quote:
      "Professional, punctual, and incredibly talented. The corporate event catering was flawless. Will definitely be using their services again.",
    name: "Amit Khanna",
    event: "Corporate Gala",
    rating: 5,
  },
  {
    quote:
      "The best catering experience we've ever had. From the menu customization to the presentation, everything was perfect. Highly recommend!",
    name: "Sunita Patel",
    event: "Birthday Celebration",
    rating: 5,
  },
  {
    quote:
      "We trusted Thaal Caters for our religious ceremony, and they exceeded every expectation. Authentic flavors and impeccable service.",
    name: "Ramesh Gupta",
    event: "Religious Ceremony",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-24 bg-ivory bg-grain">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by hundreds of happy customers"
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-center px-4"
              >
                <div className="text-gold text-6xl font-heading leading-none mb-6 opacity-40">
                  &ldquo;
                </div>
                <p className="font-heading text-xl md:text-2xl text-charcoal leading-relaxed mb-8 italic font-light">
                  {testimonial.quote}
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="font-medium text-charcoal">{testimonial.name}</p>
                <p className="text-stone text-sm">{testimonial.event}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-beige flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-gold w-6"
                      : "bg-beige hover:bg-gold/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-beige flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

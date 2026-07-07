"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Camera, Video, Globe } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },

  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Wedding Services", href: "/services#wedding" },
  { label: "Catering Services", href: "/services#catering" },
  { label: "Entertainment", href: "/services#entertainment" },
  { label: "Event Support", href: "/services#support" },
  { label: "Birthday Catering", href: "/services#catering" },
  { label: "Corporate Catering", href: "/services#catering" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="font-heading text-2xl font-bold text-white">
                Thaal
              </span>
              <span className="font-heading text-lg font-light text-white/60">
                {" "}Caters
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Exceptional catering for every celebration. We bring premium
              culinary experiences to weddings, corporate events, and special
              occasions.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Camera, href: "#" },
                { icon: Globe, href: "#" },
                { icon: Video, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                  aria-label="Social media"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:7907199231"
                  className="flex items-center gap-3 text-white/60 text-sm hover:text-gold transition-colors duration-300"
                >
                  <Phone size={14} className="shrink-0" />
                  <span>+91 79071 99231</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@thaalCaters.com"
                  className="flex items-center gap-3 text-white/60 text-sm hover:text-gold transition-colors duration-300"
                >
                  <Mail size={14} className="shrink-0" />
                  <span>info@thaalCaters.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin size={14} className="shrink-0 mt-0.5" />
                  <span>Your City, Your State, India</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Thaal Caters. All rights
              reserved.
            </p>
            <p className="text-white/30 text-xs">
              Crafted with care for exceptional experiences.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

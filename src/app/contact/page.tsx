"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const eventTypes = [
  "Wedding",
  "Corporate",
  "Birthday",
  "Outdoor Event",
  "Religious Event",
  "Buffet Service",
  "Other",
];

const guestOptions = [
  "Less than 50",
  "50 - 100",
  "100 - 250",
  "250 - 500",
  "500+",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    eventType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enquiryText = `Hello Thaal Caterers!%0A%0A*New Enquiry*%0A%0AName: ${encodeURIComponent(
      formData.name
    )}%0APhone: ${encodeURIComponent(
      formData.phone
    )}%0AEvent Date: ${encodeURIComponent(
      formData.eventDate
    )}%0AGuest Count: ${encodeURIComponent(
      formData.guestCount
    )}%0AEvent Type: ${encodeURIComponent(
      formData.eventType
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;

    window.open(
      `https://wa.me/917907199231?text=${enquiryText}`,
      "_blank"
    );
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            className="font-heading text-5xl md:text-7xl text-charcoal mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-stone text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s start planning your perfect event
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form and we&apos;ll get back to you"
                align="left"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white text-charcoal"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white text-charcoal"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white text-charcoal"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guestCount"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Guest Count
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white text-charcoal"
                    >
                      <option value="">Select guest count</option>
                      {guestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white text-charcoal"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white text-charcoal resize-none"
                    placeholder="Tell us about your event requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Send size={16} className="mr-2" />
                  Send Enquiry via WhatsApp
                </Button>
              </form>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-ivory rounded-2xl p-8 space-y-6 mb-8">
                <h3 className="font-heading text-2xl text-charcoal">
                  Contact Information
                </h3>

                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 79071 99231",
                    href: "tel:7907199231",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "+91 79071 99231",
                    href: "https://wa.me/917907199231",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@thaalcaterers.com",
                    href: "mailto:info@thaalcaterers.com",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Your City, Your State, India",
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    value: "Mon - Sun: 9:00 AM - 10:00 PM",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-stone mb-1">
                        {item.label}
                      </p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-charcoal hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-charcoal">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-beige h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919365!2d-73.985428!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU1LjgiTiA3M8KwNTknMDcuNSJX!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Thaal Caterers Location"
                />
              </div>

              <div className="mt-6 flex gap-3">
                <Button
                  variant="gold"
                  size="md"
                  href="https://wa.me/917907199231?text=Hello%20Thaal%20Caterers%2C%20I%27d%20like%20to%20enquire%20about%20your%20catering%20services."
                  className="flex-1"
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp Us
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="tel:7907199231"
                  className="flex-1"
                >
                  <Phone size={16} className="mr-2" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

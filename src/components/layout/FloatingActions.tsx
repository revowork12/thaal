"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/917907199231?text=Hello%20Thaal%20Caterers%2C%20I%27d%20like%20to%20enquire%20about%20your%20catering%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="tel:7907199231"
        className="w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 transition-all duration-200"
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}

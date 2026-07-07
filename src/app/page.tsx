import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <TestimonialsCarousel />
      <CTABanner />
    </>
  );
}

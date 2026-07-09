import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryPreview from "@/components/sections/GalleryPreview";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import CTABanner from "@/components/sections/CTABanner";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider variant="gold" />
      <TrustStats />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <SectionDivider variant="gold" />
      <TestimonialsCarousel />
      <SectionDivider variant="primary" />
      <CTABanner />
    </>
  );
}

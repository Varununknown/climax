"use client";

import HeroSection from "@/components/heroSection";
import FeatureSection from "@/components/featureSection";
import WorkingSection from "@/components/workingSection";
import TestimonialSection from "@/components/testimonialSection";
import PricingSection from "@/components/pricingSection";
import FaqSection from "@/components/faqSection";
import CtaSection from "@/components/ctaSection";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* How It Works */}
      <WorkingSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <FaqSection />

      {/* CTA */}
      <CtaSection />
    </>
  );
}

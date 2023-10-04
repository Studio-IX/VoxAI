import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import LandingFeatures from "@/components/landing-features";
import { LandingFaq } from "@/components/landing-faq";
import { LandingPricing } from "@/components/landing-pricing";
import LandingFooter from "@/components/landing-footer";
import LandingTestimonials from "@/components/landing-testimonials";

const LandingPage = () => {
  return (
    <div className="h-full">
      <div className="mx-auto max-w-screen-xl">
        <LandingNavbar />
        <LandingHero />
        <LandingFeatures />
        <LandingPricing />
      </div>
      <LandingTestimonials />
      <div className="mx-auto max-w-screen-xl">
        <LandingFaq />
        <LandingFooter />
      </div>
    </div>
  );
};

export default LandingPage;

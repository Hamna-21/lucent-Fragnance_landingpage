import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navigation } from "./components/Navigation";
import { LuxuryHero } from "./components/LuxuryHero";
import { FeaturedCollection } from "./components/FeaturedCollection";
import { BestSellers } from "./components/BestSellers";
import { StorytellingSection } from "./components/StorytellingSection";
import { FragranceNotes } from "./components/FragranceNotes";
import { LuxuryTestimonials } from "./components/LuxuryTestimonials";
import { LimitedEditionBanner } from "./components/LimitedEditionBanner";
import { Newsletter } from "./components/Newsletter";
import { PremiumFooter } from "./components/PremiumFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F6F0]">
      <AnnouncementBar />
      <Navigation />
      <LuxuryHero />
      <FeaturedCollection />
      <BestSellers />
      <StorytellingSection />
      <FragranceNotes />
      <LuxuryTestimonials />
      <LimitedEditionBanner />
      <Newsletter />
      <PremiumFooter />
    </div>
  );
}

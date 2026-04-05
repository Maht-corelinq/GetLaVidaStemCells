import type { Metadata } from "next";
import HeroVideo from "@/components/sections/hero-video";
import ConditionsOverview from "@/components/sections/conditions-overview";
import WhyLaVida from "@/components/sections/why-la-vida";
import TheExperience from "@/components/sections/the-experience";
import Testimonials from "@/components/sections/testimonials";
import FaqAccordion from "@/components/sections/faq-accordion";
import LeadForm from "@/components/sections/lead-form";
import CtaBand from "@/components/sections/cta-band";
import StatsBand from "@/components/sections/stats-band";
import Disclaimer from "@/components/sections/disclaimer";
import SectionOverlay from "@/components/ui/section-overlay";
import ParallaxImageDivider from "@/components/ui/parallax-image-divider";

export const metadata: Metadata = {
  title: "La Vida Regenerative Medicine | Stem Cell Therapy in Punta Cana",
  description: "World-class stem cell therapy in Punta Cana. Fresh UC-MSC cells, expert physicians, and a luxury healing experience. Book your free consultation.",
  openGraph: {
    title: "La Vida Regenerative Medicine | Stem Cell Therapy in Punta Cana",
    description: "World-class stem cell therapy in Punta Cana. Fresh cells, expert physicians, luxury recovery.",
    url: "https://lavidastemcells.com",
    images: [{ url: "/images/hero-home.jpg", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    question: "What are UC-MSC stem cells?",
    answer:
      "UC-MSC (Umbilical Cord Mesenchymal Stem Cells) are young, potent stem cells derived from donated umbilical cord tissue. They have strong regenerative properties and are well-studied for their ability to support tissue repair, reduce inflammation, and modulate the immune system.",
  },
  {
    question: "Why choose the Dominican Republic for treatment?",
    answer:
      "The Dominican Republic offers a favorable regulatory environment for regenerative therapies. La Vida's facility in Punta Cana combines world-class medical care with a luxury recovery experience, all at a fraction of what comparable treatments may cost elsewhere.",
  },
  {
    question: "How long does the treatment process take?",
    answer:
      "Most treatment protocols require 3-5 days in Punta Cana. This includes your initial evaluation, treatment administration, and post-treatment monitoring. Many patients extend their stay to enjoy recovery in paradise.",
  },
  {
    question: "Are stem cell treatments safe?",
    answer:
      "UC-MSC stem cells have been extensively studied and used in thousands of clinical applications worldwide. Our treatments are administered by board-certified physicians in a controlled clinical environment with strict safety protocols. As with any medical procedure, your physician will discuss potential risks during your consultation.",
  },
  {
    question: "What is the consultation process?",
    answer:
      "Your journey begins with a free phone or video consultation with our medical team. We review your medical history, discuss your condition and goals, and determine if stem cell therapy may be appropriate for you. There is no obligation to proceed.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Stem cell therapies are typically not covered by insurance. However, we offer flexible payment options and can provide documentation for HSA/FSA accounts where applicable. Contact our team for detailed pricing information.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroVideo
        headline="Regenerative Medicine in Paradise"
        subheadline="World-class stem cell therapy in Punta Cana. Fresh cells, expert physicians, and a luxury healing experience designed around you."
        secondaryCta={{ text: "Learn More", href: "#about" }}
      />

      {/* What is Stem Cell Therapy */}
      <SectionOverlay>
        <section id="about" className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Heading anchored left, taking 5 cols */}
            <div className="lg:col-span-5">
              <div className="w-12 h-1 bg-coral rounded-full mb-6" />
              <h2
                className="font-heading font-bold text-ocean-deepest leading-[1.1] tracking-tight"
                style={{ fontSize: "var(--text-heading-1)" }}
              >
                What is Stem Cell Therapy?
              </h2>
            </div>
            {/* Body text on the right, taking 7 cols */}
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
                Stem cell therapy harnesses your body&apos;s natural ability to heal.
                Using fresh UC-MSC (Umbilical Cord Mesenchymal Stem Cells), our
                treatments are designed to support tissue repair, reduce
                inflammation, and promote regeneration at the cellular level.
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
                Unlike synthetic medications that mask symptoms, regenerative
                medicine works with your body to address the underlying causes of
                pain, degeneration, and dysfunction.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-coral/20 border-2 border-white flex items-center justify-center text-xs font-bold text-coral">92%</div>
                  <div className="w-10 h-10 rounded-full bg-seafoam/20 border-2 border-white flex items-center justify-center text-xs font-bold text-seafoam-dark">+</div>
                </div>
                <p className="text-sm text-gray-500">Cell viability rate with fresh, never-frozen UC-MSCs</p>
              </div>
            </div>
          </div>
        </section>
      </SectionOverlay>

      <ConditionsOverview />

      {/* B&W parallax divider — medical authority */}
      <ParallaxImageDivider
        src="/images/lab-equipment-bw.webp"
        alt="State-of-the-art laboratory equipment"
        grayscale
        overlay="ocean"
        height="h-[40vh] md:h-[50vh]"
      >
        <div className="text-center max-w-3xl">
          <p className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight">
            Fresh Cells. Never Frozen.
          </p>
          <p className="mt-4 text-cream-muted text-lg">
            In-house harvesting ensures unmatched quality and potency.
          </p>
        </div>
      </ParallaxImageDivider>

      <SectionOverlay>
        <WhyLaVida />
      </SectionOverlay>

      {/* Stats band with animated counters */}
      <StatsBand />

      <CtaBand
        headline="Ready to Explore Your Options?"
        subtext="Schedule a free consultation with our medical team to discuss your condition and treatment goals."
      />

      {/* Paradise parallax divider */}
      <ParallaxImageDivider
        src="/images/beach-paradise.webp"
        alt="Pristine Caribbean beach in Punta Cana"
        overlay="dark"
        height="h-[50vh] md:h-[60vh]"
      >
        <div className="text-center max-w-3xl">
          <p className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight">
            Heal in Paradise
          </p>
          <p className="mt-4 text-cream-muted text-lg">
            World-class treatment meets the beauty of Punta Cana.
          </p>
        </div>
      </ParallaxImageDivider>

      <SectionOverlay>
        <TheExperience />
      </SectionOverlay>

      <Testimonials />

      {/* B&W wellness divider before FAQ */}
      <ParallaxImageDivider
        src="/images/tropical-wellness.webp"
        alt="Wellness and recovery in a tropical setting"
        grayscale
        overlay="ocean"
        height="h-[35vh] md:h-[45vh]"
      />

      <Disclaimer />

      <SectionOverlay>
        <section className="py-20 md:py-28 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <h2
              className="font-heading font-bold text-ocean-deepest mb-12 leading-[1.1] tracking-tight"
              style={{ fontSize: "var(--text-heading-1)" }}
            >
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqs={faqs} variant="light" />
          </div>
        </section>
      </SectionOverlay>

      <SectionOverlay>
        <LeadForm />
      </SectionOverlay>

    </>
  );
}

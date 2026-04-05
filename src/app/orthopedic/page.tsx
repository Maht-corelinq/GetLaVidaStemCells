import type { Metadata } from "next";
import HeroVideo from "@/components/sections/hero-video";
import TreatmentsGrid from "@/components/sections/treatments-grid";
import JourneyTimeline from "@/components/sections/journey-timeline";
import Testimonials from "@/components/sections/testimonials";
import FaqAccordion from "@/components/sections/faq-accordion";
import LeadForm from "@/components/sections/lead-form";
import CtaBand from "@/components/sections/cta-band";
import Disclaimer from "@/components/sections/disclaimer";
import ParallaxImageDivider from "@/components/ui/parallax-image-divider";
import SectionOverlay from "@/components/ui/section-overlay";
import OrthoConditions from "@/components/sections/ortho-conditions";

export const metadata: Metadata = {
  title: "Orthopedic Stem Cell Therapy",
  description:
    "Advanced stem cell treatments for joint pain, arthritis, sports injuries, and orthopedic conditions. Fresh UC-MSC cells with 92-95% viability in Punta Cana.",
};

const treatments = [
  {
    title: "Cervical Epidural Injection",
    description:
      "Targeted stem cell delivery to the cervical spine to address neck pain, herniated discs, and cervical radiculopathy.",
    icon: "syringe",
  },
  {
    title: "Shoulder Regeneration",
    description:
      "UC-MSC therapy for rotator cuff injuries, frozen shoulder, and degenerative shoulder conditions.",
    icon: "bone",
  },
  {
    title: "Lower Back Protocol",
    description:
      "Comprehensive stem cell treatment for lumbar disc degeneration, sciatica, and chronic lower back pain.",
    icon: "activity",
  },
  {
    title: "UC-MSC Joint Injection",
    description:
      "Direct stem cell injection into damaged joints to support cartilage repair and reduce inflammation.",
    icon: "syringe",
  },
  {
    title: "Wound Care & Tissue Repair",
    description:
      "Advanced regenerative protocols for chronic wounds, tissue damage, and post-surgical healing support.",
    icon: "heart",
  },
  {
    title: "Athletic Performance Recovery",
    description:
      "Specialized protocols for athletes seeking accelerated recovery from injuries and enhanced tissue regeneration.",
    icon: "zap",
  },
];

const faqs = [
  {
    question: "How do stem cells help with joint pain?",
    answer:
      "UC-MSC stem cells may support the body's natural repair processes by reducing inflammation, promoting cartilage regeneration, and modulating the immune response in damaged joints. Many patients report improvements in pain levels and mobility following treatment.",
  },
  {
    question: "What is the cell viability rate?",
    answer:
      "Our fresh UC-MSC stem cells maintain viability rates of 92-95%. Because our cells are never frozen, they retain their full regenerative potential — a key differentiator from clinics using cryopreserved products.",
  },
  {
    question: "How soon can I expect to see results?",
    answer:
      "Individual timelines vary. Some patients report initial improvements within 2-4 weeks, while the full regenerative process may continue for 3-6 months as new tissue develops. Your physician will provide a personalized timeline based on your specific condition.",
  },
  {
    question: "Can I combine treatments?",
    answer:
      "Yes, many patients receive multi-area treatments during a single visit. For example, a patient with both knee and lower back issues may receive targeted injections to both areas. Our physicians design comprehensive protocols based on your full evaluation.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "Most patients describe the procedure as involving mild discomfort comparable to a standard injection. Local anesthesia is used to minimize any pain. The entire treatment session typically takes 1-3 hours depending on the protocol.",
  },
];

export default function OrthopedicPage() {
  return (
    <>
      <HeroVideo
        headline="Stop Managing Pain. Start Healing."
        subheadline="Advanced stem cell therapy for joints, spine, and orthopedic conditions. Fresh cells, proven protocols, real results."
        secondaryCta={{ text: "Learn More", href: "#conditions" }}
        heroImage="/images/hero-orthopedic.webp"
      />

      {/* Interactive conditions accordion */}
      <OrthoConditions />

      {/* Treatments — editorial offset */}
      <SectionOverlay>
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-14">
              <div className="lg:col-span-5">
                <h2
                  className="font-heading font-bold text-ocean-deepest leading-[1.1] tracking-tight"
                  style={{ fontSize: "var(--text-heading-1)" }}
                >
                  Our Treatment Protocols
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
                  Each protocol is personalized based on your condition, medical
                  history, and treatment goals. All procedures are overseen by Dr. Bernardo Pichardo Caba.
                </p>
              </div>
            </div>
            <TreatmentsGrid treatments={treatments} variant="light" />
          </div>
        </section>
      </SectionOverlay>

      {/* Cell Quality — editorial offset with image */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2
              className="font-heading font-bold text-ocean-deepest leading-[1.1] tracking-tight"
              style={{ fontSize: "var(--text-heading-1)" }}
            >
              The La Vida Difference: Cell Quality
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-coral">92-95%</div>
                <div className="mt-1 text-sm text-gray-600">Cell Viability Rate</div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-coral">Fresh</div>
                <div className="mt-1 text-sm text-gray-600">Never Frozen Cells</div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-coral">On-Site</div>
                <div className="mt-1 text-sm text-gray-600">In-House Laboratory</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
              Not all stem cells are created equal. At La Vida, we use
              exclusively fresh, never-frozen UC-MSC stem cells processed in our
              on-site laboratory. This means higher cell counts, superior
              viability rates of 92-95%, and maximum regenerative potential for
              every treatment.
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
              Our donor mothers receive targeted nutrition and undergo multiple disease
              screenings. Dr. Pichardo personally oversees all stem cell harvesting,
              processing, and preparation — we never outsource quality control.
            </p>
            <img
              src="/images/laboratory.webp"
              alt="La Vida in-house laboratory"
              className="mt-8 w-full rounded-2xl object-cover aspect-[16/10] img-bw-hover"
            />
          </div>
        </div>
      </section>

      {/* B&W parallax divider */}
      <ParallaxImageDivider
        src="/images/treatment-room.webp"
        alt="Modern treatment room"
        grayscale
        overlay="ocean"
        height="h-[40vh] md:h-[50vh]"
      >
        <p className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight text-center max-w-3xl">
          Your Path to Pain-Free Living
        </p>
      </ParallaxImageDivider>

      <CtaBand
        headline="Take the First Step Toward Pain-Free Living"
        subtext="Our medical team is ready to discuss your condition and create a personalized treatment plan."
      />

      {/* Journey Timeline */}
      <SectionOverlay>
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-heading font-bold text-ocean-deepest mb-14 leading-[1.1] tracking-tight"
              style={{ fontSize: "var(--text-heading-1)" }}
            >
              Your Patient Journey
            </h2>
            <JourneyTimeline />
          </div>
        </section>
      </SectionOverlay>

      <Testimonials />

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

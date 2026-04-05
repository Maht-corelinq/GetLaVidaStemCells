import type { Metadata } from "next";
import HeroVideo from "@/components/sections/hero-video";
import TreatmentsGrid from "@/components/sections/treatments-grid";
import Testimonials from "@/components/sections/testimonials";
import FaqAccordion from "@/components/sections/faq-accordion";
import LeadForm from "@/components/sections/lead-form";
import CtaBand from "@/components/sections/cta-band";
import Disclaimer from "@/components/sections/disclaimer";
import ChatbotWidget from "@/components/sections/chatbot-widget";
import ParallaxImageDivider from "@/components/ui/parallax-image-divider";
import SectionOverlay from "@/components/ui/section-overlay";
import NeuroConditions from "@/components/sections/neuro-conditions";

export const metadata: Metadata = {
  title: "Neurological & Autoimmune Stem Cell Therapy",
  description:
    "Innovative stem cell treatments for Parkinson's, dementia, MS, lupus, Crohn's, and diabetes. High-dose IV and intrathecal protocols in Punta Cana.",
};

const treatments = [
  {
    title: "Intrathecal Stem Cell Delivery",
    description:
      "Direct delivery of UC-MSC stem cells to the cerebrospinal fluid, allowing cells to reach the central nervous system more effectively.",
    icon: "brain",
  },
  {
    title: "High-Dose IV Protocol",
    description:
      "Intravenous administration of 600-700 million fresh UC-MSC cells for systemic healing and immune modulation.",
    icon: "activity",
  },
  {
    title: "Autoimmune Protocol",
    description:
      "Specialized treatment to modulate the overactive immune response in lupus, MS, and Crohn's disease.",
    icon: "shield",
  },
  {
    title: "Diabetes Support Protocol",
    description:
      "Targeted therapy to support pancreatic function and insulin sensitivity in Type 1 and Type 2 diabetes.",
    icon: "heart",
  },
];

const faqs = [
  {
    question: "How do stem cells help neurological conditions?",
    answer:
      "UC-MSC stem cells have demonstrated neuroprotective and neuroregenerative properties in published research. They may help reduce neuroinflammation, support the repair of damaged neural tissue, and promote the body's natural healing mechanisms. Results vary by individual and condition.",
  },
  {
    question: "What is intrathecal delivery?",
    answer:
      "Intrathecal delivery involves administering stem cells directly into the cerebrospinal fluid via a lumbar puncture. This allows cells to bypass the blood-brain barrier and reach the central nervous system more directly than intravenous delivery alone.",
  },
  {
    question: "How many cells are used in high-dose protocols?",
    answer:
      "Our high-dose IV protocols typically administer 600-700 million fresh UC-MSC cells in a single session. The exact cell count is determined by your physician based on your condition, body weight, and treatment goals.",
  },
  {
    question: "Is there research supporting these treatments?",
    answer:
      "Yes, there is a growing body of peer-reviewed research on UC-MSC stem cells for neurological and autoimmune conditions. Studies published through the NIH and other institutions have explored their potential for conditions including MS, Parkinson's, and autoimmune disorders.",
  },
  {
    question: "Can stem cell therapy replace my current medications?",
    answer:
      "Stem cell therapy is designed to complement, not replace, your current treatment plan. Any changes to medications should be discussed with your primary physician. Our team works collaboratively with your existing healthcare providers.",
  },
  {
    question: "How do you address autoimmune conditions?",
    answer:
      "UC-MSC stem cells have immunomodulatory properties, meaning they may help regulate an overactive immune system. The goal is to reduce the immune system's attack on healthy tissue while supporting repair of existing damage.",
  },
];

export default function NeurologicalPage() {
  return (
    <>
      <HeroVideo
        headline="Hope for Complex Conditions"
        subheadline="Innovative stem cell protocols for neurological and autoimmune conditions. High-dose treatments designed to support your body's natural healing."
        secondaryCta={{ text: "Learn More", href: "#conditions" }}
        heroImage="/images/hero-neurological-v2.webp"
      />

      {/* Conditions — interactive accordion */}
      <NeuroConditions />

      {/* Paradise wellness divider */}
      <ParallaxImageDivider
        src="/images/patient-consultation.webp"
        alt="Doctor consulting with patient"
        overlay="ocean"
        height="h-[40vh] md:h-[50vh]"
      >
        <div className="text-center max-w-3xl">
          <p className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight">
            Personalized Treatment Plans
          </p>
          <p className="mt-4 text-cream-muted text-lg">
            Every protocol is designed around your specific condition and goals.
          </p>
        </div>
      </ParallaxImageDivider>

      {/* Treatments — editorial offset layout instead of centered grid */}
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
                  Advanced protocols tailored to the specific needs of neurological and
                  autoimmune patients. Each treatment is overseen by Dr. Bernardo Pichardo Caba.
                </p>
              </div>
            </div>
            <TreatmentsGrid treatments={treatments} variant="light" />
          </div>
        </section>
      </SectionOverlay>

      {/* Research — editorial offset, not centered */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2
              className="font-heading font-bold text-ocean-deepest leading-[1.1] tracking-tight"
              style={{ fontSize: "var(--text-heading-1)" }}
            >
              Supported by Research
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-coral">600-700M</div>
                <div className="mt-1 text-sm text-gray-600">Cells Per High-Dose Session</div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-coral">Peer-Reviewed</div>
                <div className="mt-1 text-sm text-gray-600">NIH-Published Studies</div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-coral">Personalized</div>
                <div className="mt-1 text-sm text-gray-600">Physician-Designed Protocols</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
              Our treatment protocols are informed by a growing body of
              peer-reviewed research on mesenchymal stem cells. Studies published
              through the National Institutes of Health (NIH) and international
              research institutions have demonstrated the potential of UC-MSC
              therapy for neurological and autoimmune conditions.
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
              While stem cell therapy is still an evolving field, the evidence
              supporting its safety and potential efficacy continues to grow. Our
              medical team stays at the forefront of this research to provide you
              with the most informed care possible.
            </p>
            <img
              src="/images/medical-team.webp"
              alt="La Vida medical team"
              className="mt-8 w-full rounded-2xl object-cover aspect-[16/10] img-bw-hover"
            />
          </div>
        </div>
      </section>

      {/* B&W parallax divider */}
      <ParallaxImageDivider
        src="/images/aerial-punta-cana.webp"
        alt="Aerial view of Punta Cana coastline"
        overlay="dark"
        height="h-[40vh] md:h-[50vh]"
      >
        <p className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight text-center max-w-3xl">
          Advancing the Science of Healing
        </p>
      </ParallaxImageDivider>

      <CtaBand
        headline="Explore Your Treatment Options"
        subtext="Connect with our medical team for a free consultation about your specific condition."
      />

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

      <ChatbotWidget />
    </>
  );
}

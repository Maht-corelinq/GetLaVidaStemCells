"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer, customEase } from "@/lib/animations";

interface Condition {
  title: string;
  description: string;
  treatments: string[];
}

const conditions: Condition[] = [
  {
    title: "Knee Osteoarthritis",
    description: "Joint degeneration, cartilage loss, and chronic knee inflammation.",
    treatments: ["UC-MSC joint injection", "Cartilage regeneration protocol", "Anti-inflammatory IV support"],
  },
  {
    title: "Rotator Cuff Injuries",
    description: "Shoulder pain, tears, and degenerative shoulder conditions.",
    treatments: ["Shoulder stem cell therapy", "Targeted injection protocol", "Post-procedure rehabilitation support"],
  },
  {
    title: "Lower Back Pain",
    description: "Disc degeneration, sciatica, and chronic lumbar conditions.",
    treatments: ["Lower back epidural injection", "Lumbar disc support protocol", "IV stem cell therapy"],
  },
  {
    title: "Sports Injuries",
    description: "Ligament tears, tendon damage, and muscle recovery.",
    treatments: ["Athletic performance recovery", "Ligament & tendon repair", "Accelerated tissue regeneration"],
  },
  {
    title: "Peripheral Neuropathy",
    description: "Nerve damage, numbness, and chronic nerve pain.",
    treatments: ["Neuropathy stem cell protocol", "IV therapy with MSCs", "Nerve regeneration support"],
  },
  {
    title: "Chronic Joint Inflammation",
    description: "Systemic joint inflammation and degenerative arthritis.",
    treatments: ["Arthritis therapy protocol", "Immune modulation treatment", "Multi-joint injection plan"],
  },
];

export default function OrthoConditions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="conditions" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-5">
              <h2
                className="font-heading font-bold text-ocean-deepest leading-[1.1] tracking-tight"
                style={{ fontSize: "var(--text-heading-1)" }}
              >
                Conditions We Address
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-600" style={{ fontSize: "var(--text-body-lg)" }}>
                Our orthopedic stem cell protocols are designed to support healing
                for a wide range of musculoskeletal conditions.
              </p>
            </div>
          </motion.div>

          <div className="border-t border-gray-200">
            {conditions.map((condition, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div key={condition.title} variants={fadeInUp} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group w-full flex items-center gap-6 md:gap-10 py-5 md:py-6 px-2 md:px-4 -mx-2 md:-mx-4 transition-colors hover:bg-gray-50 text-left cursor-pointer"
                  >
                    <span className="font-display text-3xl md:text-4xl text-coral/40 leading-none shrink-0 w-12 md:w-16 transition-colors group-hover:text-coral/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg md:text-xl text-ocean-deepest leading-tight">
                        {condition.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: customEase }}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center shrink-0 transition-colors group-hover:border-coral/40"
                    >
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: customEase }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-[4.5rem] md:pl-[6.5rem] pr-4">
                          <p className="text-gray-500 leading-relaxed mb-4">
                            {condition.description}
                          </p>
                          <p className="text-xs uppercase tracking-wider text-coral/60 mb-2">Available Treatments</p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {condition.treatments.map((t) => (
                              <div key={t} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-coral/50 shrink-0" />
                                <span className="text-sm text-gray-500">{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

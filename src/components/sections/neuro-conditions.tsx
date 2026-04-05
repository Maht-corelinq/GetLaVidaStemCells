"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer, customEase } from "@/lib/animations";

interface Condition {
  title: string;
  description: string;
  symptoms: string[];
  approach: string;
}

const conditions: Condition[] = [
  {
    title: "Parkinson's Disease",
    description: "Movement disorders, tremors, and neurodegenerative decline.",
    symptoms: ["Tremors & rigidity", "Slowness of movement", "Balance difficulties", "Cognitive changes"],
    approach: "Intrathecal delivery allows stem cells to reach the central nervous system directly, targeting neuroinflammation and supporting neural repair.",
  },
  {
    title: "Dementia & Cognitive Decline",
    description: "Memory loss, cognitive impairment, and age-related neurodegeneration.",
    symptoms: ["Memory loss", "Difficulty concentrating", "Confusion & disorientation", "Personality changes"],
    approach: "High-dose IV and intrathecal protocols designed to reduce neuroinflammation and support cognitive function through cellular regeneration.",
  },
  {
    title: "Multiple Sclerosis",
    description: "Autoimmune nerve damage, mobility loss, and chronic neuroinflammation.",
    symptoms: ["Numbness & tingling", "Vision problems", "Muscle weakness", "Fatigue & balance issues"],
    approach: "Immunomodulatory stem cell therapy aims to calm the overactive immune response while supporting myelin repair.",
  },
  {
    title: "Lupus & Autoimmune Conditions",
    description: "Systemic inflammation, joint damage, and immune dysregulation.",
    symptoms: ["Joint pain & swelling", "Skin rashes", "Extreme fatigue", "Organ inflammation"],
    approach: "UC-MSC stem cells help regulate the immune system, reducing the body's attack on healthy tissue while promoting tissue repair.",
  },
  {
    title: "Crohn's Disease",
    description: "Inflammatory bowel disease and chronic digestive system inflammation.",
    symptoms: ["Abdominal pain", "Chronic diarrhea", "Weight loss", "Fatigue & malnutrition"],
    approach: "Stem cell therapy targets gut inflammation and supports intestinal tissue repair through immune modulation.",
  },
  {
    title: "Type 1 & Type 2 Diabetes",
    description: "Pancreatic support and insulin sensitivity protocols.",
    symptoms: ["Blood sugar instability", "Fatigue & weakness", "Slow wound healing", "Nerve damage"],
    approach: "Targeted protocols designed to support pancreatic function, improve insulin sensitivity, and address diabetic complications.",
  },
];

export default function NeuroConditions() {
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
                Our neurological and autoimmune protocols are designed for patients
                seeking innovative treatment options for complex conditions.
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
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                            <div>
                              <p className="text-xs uppercase tracking-wider text-coral/60 mb-2">Common Symptoms</p>
                              {condition.symptoms.map((s) => (
                                <div key={s} className="flex items-center gap-2 py-0.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-coral/50 shrink-0" />
                                  <span className="text-sm text-gray-500">{s}</span>
                                </div>
                              ))}
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-seafoam-dark mb-2">Our Approach</p>
                              <p className="text-sm text-gray-500 leading-relaxed">
                                {condition.approach}
                              </p>
                            </div>
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

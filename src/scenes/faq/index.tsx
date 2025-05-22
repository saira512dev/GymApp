import { SelectedPage, TestimonialType, faqs } from "@/shared/types";
import { AnimatePresence, motion } from "framer-motion";
import HText from "@/shared/HText";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Faq = ({ setSelectedPage }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  return (
    <section id="faq" className="w-full bg-primary-75 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Faq)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="w-full md:mx-30 text-center">
            <HText>Workout FAQs</HText>
            <div className="mt-7"></div>
          </div>
          <div className="max-w-xl mx-auto p-4">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 bg-primary-100 hover:bg-primary-300 transition-colors"
                    onClick={() => toggle(i)}
                  >
                    <span className="text-left font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <span className="text-xl">
                      {openIndex === i ? "-" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 text-gray-700 text-sm"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faq;

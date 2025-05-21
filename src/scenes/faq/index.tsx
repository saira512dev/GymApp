import { SelectedPage, TestimonialType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Testimonial from "../testimonials/Testimonial";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Faq = ({ setSelectedPage }: Props) => {
  return (
    <section id="faq" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
      >
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
            <HText>Results That Inspire</HText>
            <div className="mt-7"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faq;

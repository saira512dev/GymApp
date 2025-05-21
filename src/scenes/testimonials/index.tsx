import HText from "@/shared/HText";
import {
  SelectedPage,
  TestimonialType,
  testimonialsData,
} from "@/shared/types";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotate = useTransform(x, [-150, 150], [-18, 18]);
  const [testimonials, setTestimonials] =
    useState<TestimonialType[]>(testimonialsData);

  useEffect(() => {
    if (testimonials.length === 0) {
      const timer = setTimeout(() => {
        setTestimonials([...testimonialsData]); // Or fetch new data
      }, 800); // Brief delay for UX
      return () => clearTimeout(timer);
    }
  }, [testimonials]);

  return (
    <section id="testimonials" className="text-center">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
      >
        <div className="w-full mt-10 mx-0 md:mx-30 flex flex-col justify-center items-center">
          <HText>Results That Inspire</HText>
          <div className="w-full md:w-[700px]  h-[700px] grid place-items-center overflow-x-hidden max-w-full">
            {testimonials.map((testimonial, index) => {
              return (
                <Testimonial
                  key={`${testimonial.name} + index`}
                  testimonial={testimonial}
                  testimonials={testimonials}
                  setTestimonials={setTestimonials}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;

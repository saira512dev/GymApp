import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const isValid = await trigger();
    if (!isValid) return;

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/638638d47b67c85bbccd999e3f84fca1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setShowSuccess(true);
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  // 🔧 Clear success message when typing
  const handleInputChange = () => {
    if (showSuccess) setShowSuccess(false);
  };

  return (
    <section
      id="contactus"
      className="mx-auto w-5/6 pt-24 pb-32 overflow-x-hidden"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="m:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5 md:w-2/4">
            Join now and take the first step toward a stronger, healthier you.
            Our expert-led classes and supportive community are here to help you
            achieve your fitness goals—no matter where you're starting from.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
                onChange={handleInputChange} // 🔧
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}

              <input
                type="email"
                className={inputStyles}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                onChange={handleInputChange} // 🔧
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid Email Address."}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                className={inputStyles}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 1000 })}
                onChange={handleInputChange} // 🔧
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 1000 characters."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>

            {showSuccess && (
              <div className="text-green-600 text-lg font-semibold mt-10">
                🎉 Thank you! Your message has been sent successfully.
              </div>
            )}
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="overflow-x-hidden md:before:content-evolvetext w-full md:before:absolute md:before:-bottom-[-20px] md:before:-right-10 md:before:z-[-1]">
              <img
                className="w-full max-w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

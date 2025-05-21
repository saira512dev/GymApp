import { TestimonialType } from "@/shared/types";
import { motion, useMotionValue, useTransform } from "framer-motion";

type Props = {
  testimonial: TestimonialType;
  testimonials: TestimonialType[];
  setTestimonials: React.Dispatch<React.SetStateAction<TestimonialType[]>>;
};

const Testimonial = ({ testimonial, testimonials, setTestimonials }: Props) => {
  const { id, name, content, stars, location, role } = testimonial;
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const isFront = id === testimonials[testimonials.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setTestimonials((prevArray) => prevArray.filter((e) => e.id !== id));
    }
  };

  const PersonIcon = () => (
    <div className="w-10 h-10 rounded-full bg-primary-300 flex items-center justify-center text-white">
      {name.charAt(0).toUpperCase()}
    </div>
  );

  return (
    <motion.div
      className="w-[90%] max-w-[280px] sm:w-72 xs:w-60 xss:w-56 py-5 px-5 xs:py-0 xs:px-0 mx-auto h-65 xss:h-78 xs:h-96 rounded-lg hover:cursor-grab active:cursor-grabbing origin-bottom 
      bg-primary-100 hover:bg-primary-300 transition-colors duration-300"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
          : "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      <div className="p-5 h-full flex flex-col">
        {/* Header with icon and info */}
        <div className="flex flex-col xss:flex-row items-center mb-3 border birder-primary-200 xss:mb-4">
          <div className="w-8 h-8 xss:w-10 xss:h-10 rounded-full bg-primary-300 flex items-center justify-center text-white mb-2 xss:mb-0 mr-0 xss:mr-3">
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="text-center xss:text-left">
            <h3 className="text-sm xss:text-base font-bold text-gray-800 line-clamp-1">
              {name}
            </h3>
            <p className="text-xs xss:text-sm text-primary-500 line-clamp-1">
              {role}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center">
          <p className="text-sm xss:text-base text-gray-700 text-center xss:text-left">
            "{content}"
          </p>
        </div>

        {/* ID */}
        <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
          {/* Top Row - Stars & Location */}
          <div className="flex items-center col-span-2">
            {/* Star Rating */}
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${i < testimonial.stars ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="ml-1 text-gray-600">{testimonial.stars}.0</span>
            </div>

            {/* Location */}
            <div className="flex items-center text-gray-600">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {testimonial.location}
            </div>
          </div>

          {/* Bottom Row - Join Date */}
          <div className="col-span-2 text-gray-500">{testimonial.joinDate}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;

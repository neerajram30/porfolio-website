"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tools from '../Tools/Tools';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const specializations = [
  "Frontend Architecture",
  "Performance Optimization",
  "Responsive Design",
  "REST API Integration",
];

const stats = [
  { value: "3.7+", label: "Years Experience" },
  { value: "15+", label: "Components Built" },
  { value: "3", label: "Products Served" },
];

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      className="pt-10 md:pl-20 pl-10 md:pr-20 pr-10 pb-10 text-white w-screen bg-[#0e131a]"
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className="text-center" variants={item}>
        <h2 className="md:text-3xl text-2xl font-bold">About</h2>
      </motion.div>

      <div className="md:flex mt-10 min-h-96">
        <motion.div
          className="md:justify-around md:w-1/2 md:pr-32"
          variants={item}
        >
          <h2 className="md:text-2xl text-xl font-semibold">About me</h2>
          <p className="mt-5 text-lg leading-relaxed">
            Fullstack Developer with <span className="text-hcolor font-semibold">3.7 years</span> of
            experience building web applications using React, Next.js, and TypeScript.
            Currently at <span className="text-hcolor font-semibold">Tata Consultancy Services</span> as
            a Frontend Developer, specializing in frontend architecture, performance optimization,
            responsive design, and REST API integrations. Proven track record of owning features
            end-to-end and delivering high-performance, accessible user experiences.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {specializations.map((s) => (
              <span
                key={s}
                className="text-xs font-semibold px-3 py-1 rounded-full border border-hcolor text-hcolor"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex gap-8 mt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-hcolor">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="md:w-1/2 md:pr-10 mt-8 md:mt-0" variants={item}>
          <Tools />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;

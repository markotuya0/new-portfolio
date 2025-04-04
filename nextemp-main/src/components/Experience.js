"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
            rel="noreferrer">
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm whitespace-pre-line">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            company="Jobin.cloud"
            time="Mar 2025 - Present"
            address="County Dublin, Ireland · Remote"
            companyLink="https://www.jobin.cloud/"
            work={`I specialize in transforming design concepts into high-quality, modular Vue.js components. My role bridges the gap between design and development by leveraging AI-powered tools like Figma AI to streamline the process.
\nKey Responsibilities:\n• Design to Code Workflow – Collaborate closely with designers to ensure seamless transitions from Figma designs to Vue.js components.\n• AI-Assisted Code Generation – Utilize Figma AI to convert UI designs into Vue code, optimizing efficiency.\n• Code Refinement & Best Practices – Clean and refine AI-generated code to maintain high standards in accessibility, performance, and scalability.\n• Vue Component Development – Restructure code into reusable Vue components, ensuring modularity and maintainability.\n\nKey Skills & Technologies:\n✔ Vue.js (Components, Composition API)\n✔ HTML, CSS, SCSS, Tailwind\n✔ AI-Assisted Development (Figma AI)\n✔ UI/UX Collaboration & Design Handoff\n✔ Jira & Agile Workflow`}
          />

          <Details
            position="Senior Web Developer"
            company="Jeho Films"
            time="Jun 2021 - Present ·"
            address="United States · Remote"
            companyLink="https://jehoworld.com/"
            work={`I built and manage the platform for showcasing high-end videography and photography projects.

Key Achievements:
• Engineered a responsive, high-performance frontend ensuring seamless viewing on all devices.
• Integrated advanced gallery and video modules for an immersive user experience.
• Optimized site speed and SEO, boosting search visibility and client engagement.`}
          />

          <Details
            position="Full-stack Developer"
            company="Proxysock"
            time="Nov 2024 - Mar 2025"
            address="Canada · Remote"
            companyLink="https://proxysock.com/"
            work={`Developed and deployed a robust proxy-selling platform using modern web technologies.\n\nKey Achievements:\n• Built a full-stack application using React (TypeScript) and Supabase for seamless real-time interactions.\n• Integrated ProxyStore and PremSocks APIs to facilitate automated purchases and user management.\n• Designed a scalable backend with secure authentication, real-time admin dashboard, and cloud deployment for high performance.\n• Implemented best practices for security, scalability, and maintainability, ensuring a smooth customer experience.`}
          />

          <Details
            position="Senior Web Developer"
            company="Beauty @ Your Door"
            time="2023 - Present"
            address="Canada · Remote"
            companyLink="https://www.beautyservicesatyourdoor.com/"
            work={`Designed, developed, and currently manage a full-service beauty platform offering mobile spa services.

Key Achievements:
• Built a dynamic, user-friendly platform to connect clients with professional beauty services at their doorstep.
• Developed a responsive booking system that streamlines scheduling and enhances customer experience.
• Implemented SEO and performance optimizations, driving increased traffic and client engagement.
• Continuously maintain and enhance platform functionality to support business growth and customer satisfaction.`}
          />

          <Details
            position="E-Commerce Platform Developer"
            company="The Lace Lounge"
            time="Feb 2022 - Present"
            address="Canada · Remote"
            companyLink="https://thelacelounge.ca//"
            work={`Spearheaded the development of a fully functional and scalable e-commerce platform tailored for luxury footwear sales.\n\nKey Achievements:\n• Designed and developed the platform using WordPress and WooCommerce, ensuring a seamless shopping experience.\n• Integrated Ecwid for real-time inventory management, streamlining product availability and sales.\n• Optimized performance and SEO, significantly improving site rankings and user engagement.\n• Implemented secure payment solutions and user-friendly checkout processes, enhancing customer satisfaction.\n• Provided ongoing maintenance, updates, and feature enhancements, keeping the platform competitive and secure.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

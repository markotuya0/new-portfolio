"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-default w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       ">
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-default flex rounded-full font-semibold bg-dark text-light px-6 py-7 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        ">
          Web
        </motion.div>

        {/* Top section - reduced spread */}
        <Skill name="AWS EC2 & Cloud Deployment" x="0vw" y="-22vw" />

        {/* Top right section */}
        <Skill name="Problem-Solving & Teamwork" x="15vw" y="-18vw" />
        <Skill name="GraphQL & REST API" x="19vw" y="-10vw" />

        {/* Right section */}
        <Skill name="Node.js & Express.js" x="22vw" y="0vw" />
        <Skill name="Tailwind CSS & UI Design" x="19vw" y="10vw" />

        {/* Bottom right section */}
        <Skill name="Docker, Vagrant & DevOps" x="15vw" y="18vw" />

        {/* Bottom section */}
        <Skill name="JavaScript & TypeScript" x="0vw" y="-14vw" />

        <Skill name="CMS (WordPress, Shopify, Wix)" x="0vw" y="19vw" />

        {/* Left section */}
        <Skill name="Supabase, MongoDB & PostgreSQL" x="-22vw" y="0vw" />
        <Skill name="React & Next.js" x="-19vw" y="-10vw" />

        {/* Top left section */}
        <Skill name="Git, CI/CD & Version Control" x="-15vw" y="-18vw" />
      </div>
    </>
  );
};

export default Skills;

"use client"; // Ensure this component runs on the client-side

import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";
import { useState } from "react";
import { motion } from "framer-motion"; // Import framer motion for animations

export const Hero = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Framer Motion animation variant for buttons
  const arrowAnimation = {
    rest: { x: 0 },
    hover: { x: 10, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      {/* Reduce the gap between the nav bar and text */}
      <FlexboxSpacer maxWidth={50} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-2 text-left lg:mx-0 lg:grow lg:pt-8 lg:text-left">
        {/* Static text without typing effect */}
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Create a Professional or Political resume easily
        </h1>

        {/* Render buttons */}
        <div className="mt-2 flex flex-col items-start"> {/* Align buttons to the left */}
          {/* Create Resume Button centered at the top */}
          <motion.div
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
            whileHover={{ scale: 1.05 }}
            className="relative inline-block mb-4"
          >
            <Link href="#" className="btn-primary transition-transform transform">
              Create Resume
              <motion.span
                aria-hidden="true"
                className="inline-block"
                variants={arrowAnimation}
                initial="rest"
                whileHover="hover"
              >
                &#8594;
              </motion.span>
            </Link>

            {/* Dropdown menu with two separate buttons */}
            {isDropdownVisible && (
              <div className="absolute flex mt-1 w-32 z-10"> {/* Reduced width */}
                <Link href="/resume-import" className="mr-1 block px-2 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
                  Professional Resume
                </Link>
                <Link href="/resume-import" className="ml-1 block px-2 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
                  Political Resume
                </Link>
              </div>
            )}
          </motion.div>

          {/* Ensure enough space between rows and keep the same button size */}
          <div className="mt-12 grid grid-cols-1 gap-6 w-full"> {/* Added margin-top to separate buttons */}
            {/* Skills Audit Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/skillsaudit" className="btn-primary w-full transition-transform transform">
                Skills Audit
                <motion.span
                  aria-hidden="true"
                  className="inline-block"
                  variants={arrowAnimation}
                  initial="rest"
                  whileHover="hover"
                >
                  &#8594;
                </motion.span>
              </Link>
            </motion.div>

            {/* Skills Assessment Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/skillsassessment" className="btn-primary w-full transition-transform transform">
                Skills Assessment
                <motion.span
                  aria-hidden="true"
                  className="inline-block"
                  variants={arrowAnimation}
                  initial="rest"
                  whileHover="hover"
                >
                  &#8594;
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Additional text below buttons */}
        <p className="mt-6 text-lg lg:mt-5 lg:text-xl font-medium text-gray-700">
          Enroll for a free Skills Audit. Based on your role and expertise, participate in the Skills Assessment.
          Already have a resume? Test its ATS readability with the{" "}
          <Link href="/resume-parser" className="underline underline-offset-2">Resume Parser</Link>
        </p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow lg:ml-8"> {/* Adjusted left margin for better alignment */}
        <AutoTypingResume/>
      </div>
    </section>
  );
};

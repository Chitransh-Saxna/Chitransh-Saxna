// src/components/hero/Hero.tsx

import { LuImport } from "react-icons/lu";
import { IoOpenOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import benson from "../../assets/images/my_1.jpg";
import Name from "./Name";
import { SOCIAL_MEDIA_LINKS } from "../../constants";

const Hero = () => {
  return (
    <section id="home" className="min-h-full mb-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <Name />

        {/* Resume Buttons */}
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >


          {/* Open PDF */}
          <a
            href="/Chitransh Saxena.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-indigo-700 text-white p-2 px-4 font-sans font-medium hover:bg-indigo-800 transition-all"
          >
            <span className="mr-2">Open Resume</span>
            <IoOpenOutline />
          </a>

          {/* Download PDF */}
          <a
            href="/Chitransh Saxena.pdf"
            download
            className="flex items-center justify-center rounded-xl bg-lime-300 text-black p-2 px-4 font-sans font-medium hover:bg-lime-400 transition-all"
          >
            <span>Download Resume</span>
            <LuImport className="ml-2" />
          </a>
        </motion.div>
        {/* Social Media Icons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`text-white-700 hover:text-${link.color}-700 transition-all`}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={benson}
            alt="Chitransh-Saxena"
            className="h-96 w-full object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

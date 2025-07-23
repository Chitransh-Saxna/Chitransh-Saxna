import { motion, AnimatePresence } from "framer-motion";
import "./about.css";
import { ABOUT_ME } from "../../constants";
import { useState } from "react";

const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="about" className="px-6 text-white bg-black relative">
      <motion.h2
        className="text-center text-4xl lg:text-6xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        <p className="about-text text-xl md:text-2xl text-center leading-relaxed mb-16">
          {ABOUT_ME.about}
        </p>

        {/* Skills */}
        <motion.h3
          className="text-3xl font-semibold mb-8 text-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {ABOUT_ME.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              className="skill-hover px-4 py-2 text-sm rounded-full bg-zinc-800 text-zinc-200 flex items-center gap-2 border border-zinc-700 hover:border-lime-400 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: "easeOut"
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-4 h-4"
                style={{
                  filter:
                    skill.name === "Express" || skill.name === "GitHub"
                      ? "invert(1)"
                      : "none"
                }}
              />
              {skill.name}
            </motion.span>
          ))}
        </div>

        {/* Education */}
        <motion.h3
          className="text-3xl font-semibold mt-20 mb-6 text-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Education
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ABOUT_ME.degree.degree_src.map((src, idx) => (
            <motion.div
              key={idx}
              className="p-4 bg-zinc-900 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`degree-${idx}`}
                className="rounded-lg object-cover w-full h-64 mb-4"
              />
              <p className="text-sm text-center">{ABOUT_ME.degree.education}</p>
              <p className="text-sm text-center text-zinc-400 mt-1">
                {ABOUT_ME.degree.year}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.h3
          className="text-3xl font-semibold mt-20 mb-6 text-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Certifications
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ABOUT_ME.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="skill-box p-6 bg-zinc-900 rounded-xl shadow-md cursor-pointer"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(cert.certificate)}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg overflow-hidden">
                  <img src={cert.icon} className="w-full h-full object-cover" />
                </div>
                <div className="text-lg font-semibold">{cert.title}</div>
              </div>
              <p className="text-sm text-zinc-300">{cert.institute}</p>
              <p className="text-sm text-zinc-400">Grade: {cert.grade}</p>
              <p className="text-sm text-zinc-500">Date: {cert.date}</p>
              <img
                src={cert.certificate}
                alt={cert.title}
                className="rounded-lg object-cover w-full h-48 mt-4"
              />
            </motion.div>
          ))}
        </div>

        {/* School */}
        <motion.h3
          className="text-3xl font-semibold mt-20 mb-6 text-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          School Education
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ABOUT_ME.school.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-4 bg-zinc-900 rounded-xl shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(item.result)}
            >
              <img
                src={item.result}
                alt={`${item.class}`}
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <p className="text-lg font-semibold">{item.class}</p>
              <p className="text-sm text-zinc-400">{item.School}</p>
              <p className="text-sm text-zinc-500">{item.year}</p>
            </motion.div>
          ))}
        </div>


      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="enlarged"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;

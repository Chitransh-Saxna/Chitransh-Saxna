import { EXPERIENCES } from "../../constants";
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [cursorPosMap, setCursorPosMap] = useState<Record<number, { x: number; y: number }>>({});
  const [isButtonHovered, setIsButtonHovered] = useState<number | null>(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".work-card");

    cards.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <motion.section
      id="projects"
      className="py-12 bg-black text-white relative mt-16"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Projects & Experience
        </motion.h1>

        <AnimatePresence mode="wait">
          {EXPERIENCES.map((experience, id) => {
            const localCursorPos = cursorPosMap[id] || { x: 0, y: 0 };

            const handleCardMouseMove = (e: React.MouseEvent) => {
              const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
              const x = e.clientX - rect.left - 96;
              const y = e.clientY - rect.top - 96;
              setCursorPosMap(prev => ({ ...prev, [id]: { x, y } }));
            };

            return (
              <motion.div
                key={id}
                className="mb-12 p-6 rounded-xl bg-black border border-gray-800 hover:border-gray-700 work-card relative overflow-hidden"
                onMouseEnter={() => setHoveredImage(experience.imageSrc)}
                onMouseLeave={() => setHoveredImage(null)}
                onMouseMove={handleCardMouseMove}
                initial={{
                  opacity: 0,
                  y: 30,

                }}
                animate={{
                  opacity: 1,
                  y: 0,

                }}
                exit={{
                  opacity: 0,
                  y: -30,

                }}
                transition={{
                  duration: 0.5,
                  delay: id * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Floating image inside the card */}
                <AnimatePresence>
                  {hoveredImage === experience.imageSrc && isButtonHovered !== id && (
                    <motion.video
                      src={hoveredImage}
                      autoPlay
                      muted
                      loop
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: localCursorPos.x,
                        y: localCursorPos.y
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      className="absolute z-40 w-60 h-38 object-cover pointer-events-none rounded-lg shadow-lg"
                      style={{ transform: 'translate(-50%, -50%)' }}
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + id * 0.1, duration: 0.4 }}
                >
                  <div>
                    <h2 className="text-xl font-bold text-white">{experience.title}</h2>
                    <p className="text-lg text-gray-400 mt-1">{experience.role}</p>
                  </div>

                  {experience.link && (
                    <motion.a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-lime-300 text-black rounded-md hover:bg-lime-400 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + id * 0.1, duration: 0.4 }}
                      onMouseEnter={() => setIsButtonHovered(id)}
                      onMouseLeave={() => setIsButtonHovered(null)}
                    >
                      View Project
                    </motion.a>
                  )}
                </motion.div>

                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + id * 0.1, duration: 0.4 }}
                >
                  {experience.technology?.split("|").map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + id * 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      {tech.trim()}
                    </motion.span>
                  ))}
                </motion.div>

                {experience.additionalNotes && (
                  <motion.div
                    className="mt-6 pt-4 border-t border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + id * 0.1, duration: 0.4 }}
                  >
                    <h3 className="font-medium text-gray-200 mb-2">
                      Development Details:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      {Object.entries(experience.additionalNotes).map(([key, value], i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + id * 0.1 + i * 0.05, duration: 0.3 }}
                        >
                          <h4 className="font-medium text-gray-300 capitalize">{key}</h4>
                          <p className="text-gray-400">{value}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Work;
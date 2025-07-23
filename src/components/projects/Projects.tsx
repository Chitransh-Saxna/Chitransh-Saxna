
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code, Wrench, Zap, Home } from 'lucide-react';


const ProjectDetail = ({ project, onBack }: { project: any, onBack: () => void }) => {
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={onBack}
            className="text-lime-300 hover:text-lime-400"
          >
            Go Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-lime-300 hover:text-lime-400 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
          
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-gray-400">{project.role}</p>
        </motion.div>

        {/* Video/Demo Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Code size={80} className="text-gray-600 mb-4 mx-auto" />
                <p className="text-gray-400">Project Demo Video</p>
                <p className="text-sm text-gray-500 mt-2">
                  Video URL: {project.imageSrc}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-lime-300 text-black rounded-md hover:bg-lime-400 transition-colors font-medium"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
              
              {project.link?.includes('github.com') && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors font-medium"
                >
                  <Code size={20} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-lime-300" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technology?.split("|").map((tech: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Development Details */}
        {project.additionalNotes && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Wrench className="text-lime-300" />
              Development Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(project.additionalNotes).map(([key, value], i) => (
                <motion.div
                  key={i}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                >
                  <h3 className="font-bold text-lime-300 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value as string}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <Home size={20} />
            View All Projects
          </button>
          
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-lime-300 text-black rounded-md hover:bg-lime-400 transition-colors font-medium flex items-center gap-2"
            >
              <ExternalLink size={20} />
              Open Project
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
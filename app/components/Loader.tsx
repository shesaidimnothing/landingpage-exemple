'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleEnter = () => {
    setIsLoading(false);
    setTimeout(onComplete, 1000); // Délai pour laisser l'animation se terminer
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold mb-8 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Dream House
        </motion.h1>
        
        <motion.button
          className="px-8 py-3 backdrop-blur-md bg-white/10 border border-white/20 
                     rounded-full text-white text-lg hover:bg-white/20 
                     transition-colors duration-300"
          onClick={handleEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Enter
        </motion.button>
      </motion.div>
    </motion.div>
  );
} 
'use client';
import { motion } from 'framer-motion';

interface ExpertiseCardProps {
  title: string;
  description: string;
  index: number;
}

export default function ExpertiseCard({ title, description, index }: ExpertiseCardProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20"
    >
      <h2 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h2>
      <p className="text-white/80">
        {description}
      </p>
    </motion.div>
  );
} 
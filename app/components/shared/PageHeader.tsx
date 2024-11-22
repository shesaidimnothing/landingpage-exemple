'use client';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h1>
      <p className="text-xl text-white/80">
        {subtitle}
      </p>
    </motion.div>
  );
} 
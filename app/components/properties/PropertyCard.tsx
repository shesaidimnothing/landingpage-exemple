'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PropertyCardProps {
  option: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
  index: number;
}

export default function PropertyCard({ option, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <div className="aspect-video relative">
        <div className="absolute inset-0 backdrop-blur-md bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
        <img
          src={option.image}
          alt={option.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h2 className="text-2xl font-semibold text-white mb-2">
            {option.title}
          </h2>
          <p className="text-white/80">
            {option.description}
          </p>
          <Link
            href={option.link}
            className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 
                     rounded-full text-white hover:bg-white/20 transition-colors duration-300 inline-block text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 
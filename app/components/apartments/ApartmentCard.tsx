'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ApartmentProps {
  apartment: {
    id: number;
    title: string;
    price: string;
    size: string;
    rooms: number;
    description: string;
    image: string;
    features: string[];
  };
  index: number;
}

export default function ApartmentCard({ apartment, index }: ApartmentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden border border-white/20"
    >
      <div className="relative h-48">
        <img
          src={apartment.image}
          alt={apartment.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold text-white">
            {apartment.title}
          </h2>
          <span className="text-xl text-white/90 font-bold">
            {apartment.price}
          </span>
        </div>
        <div className="flex gap-4 mb-4">
          <span className="text-white/80">{apartment.size}</span>
          <span className="text-white/80">{apartment.rooms} pièces</span>
        </div>
        <p className="text-white/70 mb-4">{apartment.description}</p>
        <div className="flex flex-wrap gap-2">
          {apartment.features.map((feature, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
            >
              {feature}
            </span>
          ))}
        </div>
        <Link 
          href="/apartments" 
          className="w-full mt-6 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 
                   rounded-full text-white hover:bg-white/20 transition-colors duration-300 block text-center"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
} 
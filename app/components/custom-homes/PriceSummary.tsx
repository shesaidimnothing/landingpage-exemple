'use client';
import { motion } from 'framer-motion';

interface PriceSummaryProps {
  selections: Record<string, string>;
  totalPrice: number;
  configuratorOptions: Array<{
    id: string;
    title: string;
    choices: Array<{
      id: string;
      name: string;
      price: number;
    }>;
  }>;
}

export default function PriceSummary({ selections, totalPrice, configuratorOptions }: PriceSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 h-fit sticky top-24"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">
        Summary
      </h2>
      {Object.entries(selections).map(([optionId, choiceId]) => {
        const option = configuratorOptions.find(opt => opt.id === optionId);
        const choice = option?.choices.find(c => c.id === choiceId);
        return choice && (
          <div key={optionId} className="flex justify-between py-2 border-b border-white/10">
            <span className="text-white/80">{option?.title}</span>
            <span className="text-white">{choice.name}</span>
          </div>
        );
      })}
      <div className="mt-6 pt-4 border-t border-white/20">
        <div className="flex justify-between items-center">
          <span className="text-xl text-white">Total Price</span>
          <span className="text-2xl font-bold text-white">
            {totalPrice.toLocaleString()} €
          </span>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-6 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 
                 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
      >
        Request Detailed Quote
      </motion.button>
    </motion.div>
  );
} 
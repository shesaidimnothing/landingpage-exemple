'use client';
import { motion } from 'framer-motion';

interface ConfigOptionProps {
  option: {
    id: string;
    title: string;
    choices: {
      id: string;
      name: string;
      price: number;
    }[];
  };
  selections: Record<string, string>;
  onSelect: (optionId: string, choiceId: string) => void;
  index: number;
}

export default function ConfigOption({ option, selections, onSelect, index }: ConfigOptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20"
    >
      <h2 className="text-xl font-semibold text-white mb-4">
        {option.title}
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {option.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onSelect(option.id, choice.id)}
            className={`p-4 rounded-xl border transition-all duration-300
                      ${selections[option.id] === choice.id
                        ? 'bg-white/20 border-white'
                        : 'bg-white/5 border-white/20 hover:bg-white/10'
                      }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-white">{choice.name}</span>
              <span className="text-white/80">+{choice.price.toLocaleString()} €</span>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
} 
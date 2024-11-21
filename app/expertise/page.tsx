'use client';
import { motion } from 'framer-motion';
import Background from '../components/Background';
import Navbar from '../components/Navbar';

const expertiseData = [
  {
    title: "Real Estate Excellence",
    description: "With over 15 years of experience in luxury real estate, we've developed unparalleled expertise in property valuation, market analysis, and high-end property transactions.",
  },
  {
    title: "Market Knowledge",
    description: "Our deep understanding of local and global real estate trends allows us to provide accurate property valuations and strategic investment advice.",
  },
  {
    title: "Client Success",
    description: "We've successfully helped over 23M clients find their perfect property, maintaining a 98% satisfaction rate throughout our years of service.",
  }
];

export default function Expertise() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Expertise
          </h1>
          <p className="text-xl text-white/80">
            Delivering excellence in real estate for over a decade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h2>
              <p className="text-white/80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Our commitment to excellence and deep industry knowledge enables us to provide 
            unmatched real estate services to our clients worldwide.
          </p>
        </motion.div>
      </main>
    </div>
  );
} 
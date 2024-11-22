'use client';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import PageHeader from '../components/shared/PageHeader';
import ExpertiseCard from '../components/expertise/ExpertiseCard';
import { motion } from 'framer-motion';

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
        <PageHeader 
          title="Our Expertise"
          subtitle="Delivering excellence in real estate for over a decade"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
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
'use client';
import { useState, useEffect } from 'react';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import PageHeader from '../components/shared/PageHeader';
import ConfigOption from '../components/custom-homes/ConfigOption';
import PriceSummary from '../components/custom-homes/PriceSummary';

const configuratorOptions = [
  {
    id: 'style',
    title: 'Architectural Style',
    choices: [
      { id: 'modern', name: 'Modern', price: 50000 },
      { id: 'contemporary', name: 'Contemporary', price: 45000 },
      { id: 'minimalist', name: 'Minimalist', price: 40000 }
    ]
  },
  {
    id: 'size',
    title: 'Surface Area',
    choices: [
      { id: 'small', name: '100-150m²', price: 200000 },
      { id: 'medium', name: '150-200m²', price: 300000 },
      { id: 'large', name: '200-250m²', price: 400000 }
    ]
  },
  {
    id: 'rooms',
    title: 'Number of Bedrooms',
    choices: [
      { id: '2', name: '2 Bedrooms', price: 40000 },
      { id: '3', name: '3 Bedrooms', price: 60000 },
      { id: '4', name: '4 Bedrooms', price: 80000 }
    ]
  },
  {
    id: 'features',
    title: 'Premium Features',
    choices: [
      { id: 'pool', name: 'Swimming Pool', price: 50000 },
      { id: 'smart', name: 'Smart Home', price: 30000 },
      { id: 'solar', name: 'Solar Panels', price: 25000 }
    ]
  }
];

export default function CustomHomes() {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    Object.entries(selections).forEach(([optionId, choiceId]) => {
      const option = configuratorOptions.find(opt => opt.id === optionId);
      const choice = option?.choices.find(c => c.id === choiceId);
      if (choice) {
        price += choice.price;
      }
    });
    setTotalPrice(price);
  }, [selections]);

  const handleSelect = (optionId: string, choiceId: string) => {
    setSelections(prev => ({
      ...prev,
      [optionId]: choiceId
    }));
  };

  return (
    <div className="min-h-screen relative">
      <Background />
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <PageHeader 
          title="Home Configurator"
          subtitle="Customize every aspect of your future home"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {configuratorOptions.map((option, index) => (
              <ConfigOption
                key={option.id}
                option={option}
                selections={selections}
                onSelect={handleSelect}
                index={index}
              />
            ))}
          </div>

          <PriceSummary 
            selections={selections}
            totalPrice={totalPrice}
            configuratorOptions={configuratorOptions}
          />
        </div>
      </main>
    </div>
  );
} 
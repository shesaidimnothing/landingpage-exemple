'use client';
import { useState } from 'react';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import PageHeader from '../components/shared/PageHeader';
import PropertyCard from '../components/properties/PropertyCard';

const propertyOptions = [
  {
    title: "Modern Apartments",
    description: "Discover our collection of contemporary apartments, from studios to penthouses.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500",
    link: "/apartments",
  },
  {
    title: "Custom Homes",
    description: "Create your dream home according to your specific needs.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500",
    link: "/custom-homes",
  },
];

export default function Properties() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24">
        <PageHeader 
          title="Our Real Estate Solutions"
          subtitle="Choose from our options or create your custom project"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {propertyOptions.map((option, index) => (
            <PropertyCard key={option.title} option={option} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
} 
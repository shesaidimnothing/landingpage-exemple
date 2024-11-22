'use client';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import PageHeader from '../components/shared/PageHeader';
import ApartmentCard from '../components/apartments/ApartmentCard';

const apartments = [
  {
    id: 1,
    title: "Premium Studio",
    price: "250,000 €",
    size: "35m²",
    rooms: 1,
    description: "Modern studio with equipped kitchen and balcony",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
    features: ["Equipped Kitchen", "Balcony", "Smart Home", "Parking"]
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: "450,000 €",
    size: "75m²",
    rooms: 3,
    description: "Spacious apartment with panoramic view",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
    features: ["Panoramic View", "Terrace", "Smart Home", "2 Parking Spots"]
  },
  {
    id: 3,
    title: "Elite Penthouse",
    price: "980,000 €",
    size: "150m²",
    rooms: 5,
    description: "Luxury penthouse with private terrace",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
    features: ["Private Terrace", "Jacuzzi", "Advanced Smart Home", "Wine Cellar"]
  }
];

export default function Apartments() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <PageHeader 
          title="Our Modern Apartments"
          subtitle="Discover our selection of high-end apartments"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment, index) => (
            <ApartmentCard 
              key={apartment.id} 
              apartment={apartment} 
              index={index} 
            />
          ))}
        </div>
      </main>
    </div>
  );
} 
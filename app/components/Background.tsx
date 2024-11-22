'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80",
  "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80",
  "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80",
  "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80",
];

export default function Background() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Précharger l'image sélectionnée
    const preloadImage = (url: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = (e: Event) => reject(e);
      });
    };

    const loadRandomImage = async () => {
      setIsLoading(true);
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      const imageUrl = backgroundImages[randomIndex];
      
      try {
        await preloadImage(imageUrl);
        setSelectedImage(imageUrl);
      } catch (e) {
        if (e instanceof Error) {
          console.error('Erreur de chargement de l\'image:', e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadRandomImage();
  }, []);

  if (!selectedImage) {
    return (
      <div className="fixed inset-0 -z-10 bg-black" />
    );
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src={selectedImage}
        alt="Nature House Background"
        fill
        className={`object-cover transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        priority
        unoptimized
        onLoadingComplete={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
} 
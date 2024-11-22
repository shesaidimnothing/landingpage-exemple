'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const backgroundImages = [
    "https://www.alpineanswers.co.uk/media/W1siZiIsIjIwMjEvMDkvMDMvMTIvNTMvMTYvOWU1MTFjMzAtZDQ4ZS00NmFjLWJmMGYtM2M3ODM0MDdmMzQzL0NoYWxldF9aZXJtYXR0X1BlYWsgKDEpLmpwZyJdXQ/99571304a61eccca/Chalet_Zermatt_Peak%20%281%29.jpg",
    "https://images5.alphacoders.com/702/702181.jpg",
    "https://doctor-property.co.th/wp-content/uploads/2023/02/doctor-property.co_.th-583285-new-4-bedroom-seaview-2-pools-villa-laem-yai-koh-samui-for-sale-doctor-property-42.jpeg",
    "https://news.airbnb.com/wp-content/uploads/sites/4/2023/03/06_Airbnb_Villa_CostaRica.jpeg",
    "https://i.pinimg.com/originals/14/13/81/1413811b9dc0034b7098831efeb4daf7.jpg",

];

export default function Background() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      setIsLoading(true);
      const promises = backgroundImages.map(url => {
        return new Promise<void>((resolve, reject) => {
          const img = new window.Image();
          img.src = url;
          img.onload = () => resolve();
          img.onerror = (e: Event) => reject(e);
        });
      });

      try {
        await Promise.all(promises);
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        setSelectedImage(backgroundImages[randomIndex]);
      } catch (e) {
        console.error('Erreur de chargement de l\'image:', e);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
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
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
} 
'use client';
import { useState } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import WidgetContainer from './components/WidgetContainer';
import Loader from './components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen relative">
          <Background />
          <Navbar />
          <WidgetContainer />
        </div>
      )}
    </>
  );
}

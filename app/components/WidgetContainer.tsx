'use client';
import { motion } from 'framer-motion';
import Widget from './Widget';

interface WidgetData {
  id: number;
  title: string;
  description: string;
}

const widgetData: WidgetData[] = [
  {
    id: 1,
    title: "23M",
    description: "Total sellers in the last 5 years."
  },
  {
    id: 2,
    title: "15 +",
    description: "Years of experience."
  },
  {
    id: 3,
    title: "200+",
    description: "Units in the last 6 months."
  },
  {
    id: 4,
    title: "The Perfect Dream House",
    description: "We build modern and smart home for the next Generation. Our Smart homes are able to be controlled from a mobile App."
  }
];

export default function WidgetContainer() {
  return (
    <div className="fixed inset-0 pt-20 px-6">
      <div className="h-full w-full flex justify-between">
        {/* Widget en bas à gauche */}
        <motion.div 
          className="self-end mb-6"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ 
            type: "spring",
            duration: 1.5,
            bounce: 0.3
          }}
        >
          <Widget 
            title={widgetData[3].title}
            description={widgetData[3].description}
            isLarge={true}
          />
        </motion.div>

        {/* Colonne de droite */}
        <div className="flex flex-col justify-end gap-6 pr-6 mb-6">
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ 
              type: "spring",
              duration: 1.5,
              bounce: 0.3,
              delay: 0.2
            }}
          >
            <Widget 
              title={widgetData[0].title}
              description={widgetData[0].description}
              link="/expertise"
            />
          </motion.div>

          <motion.div 
            className="-ml-64"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ 
              type: "spring",
              duration: 1.5,
              bounce: 0.3,
              delay: 0.4
            }}
          >
            <Widget 
              title={widgetData[1].title}
              description={widgetData[1].description}
            />
          </motion.div>

          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ 
              type: "spring",
              duration: 1.5,
              bounce: 0.3,
              delay: 0.6
            }}
          >
            <Widget 
              title={widgetData[2].title}
              description={widgetData[2].description}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
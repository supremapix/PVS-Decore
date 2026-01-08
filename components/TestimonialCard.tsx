import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  location: string;
  text: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, location, text, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative h-full flex flex-col"
    >
      <div className="absolute -top-4 right-8 bg-brand-orange text-white p-2 rounded-full shadow-lg">
          <Quote size={20} fill="currentColor" />
      </div>
      
      <div className="flex gap-1 text-yellow-400 mb-6">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>

      <p className="text-gray-600 mb-8 italic relative z-10 leading-relaxed text-lg flex-grow">
        "{text}"
      </p>

      <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold text-xl overflow-hidden shadow-inner">
           {/* Placeholder Avatar based on Initials */}
           {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-base">{name}</h4>
          <div className="flex flex-col text-xs">
            <span className="text-brand-orange font-semibold">{location}</span>
            <span className="text-gray-400 uppercase tracking-wide">{role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
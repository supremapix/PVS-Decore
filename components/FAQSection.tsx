import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      {FAQS.map((faq, idx) => (
        <div key={idx} className="mb-4">
            <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={`w-full flex items-center justify-between p-5 rounded-xl border transition-all duration-300 ${openIndex === idx ? 'bg-white border-brand-orange shadow-md' : 'bg-gray-50 border-gray-100 hover:bg-white'}`}
            >
                <div className="flex items-center gap-4 text-left">
                    <div className={`p-2 rounded-lg ${openIndex === idx ? 'bg-brand-orange text-white' : 'bg-gray-200 text-gray-500'}`}>
                        <HelpCircle size={20} />
                    </div>
                    <span className={`font-bold text-lg ${openIndex === idx ? 'text-gray-900' : 'text-gray-600'}`}>{faq.question}</span>
                </div>
                <ChevronDown size={20} className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-brand-orange' : 'text-gray-400'}`} />
            </button>
            <AnimatePresence>
                {openIndex === idx && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 pt-2 text-gray-600 leading-relaxed bg-white border-x border-b border-brand-orange/20 rounded-b-xl">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { FAQS } from '../constants';
export default function FAQSection() {
  return <div className="max-w-3xl mx-auto">{FAQS.map(faq => <details key={faq.question} className="mb-4 p-5 rounded-xl border border-gray-200 bg-white">
    <summary className="font-bold text-lg cursor-pointer">{faq.question}</summary><p className="pt-4 text-gray-600">{faq.answer}</p><Link to="/faq" className="inline-block py-3 text-brand-orange underline">Ver dúvidas por tema</Link>
  </details>)}</div>;
}

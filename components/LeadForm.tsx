import React, { useState } from 'react';
import { CONTACT_PHONE } from '../constants';

const LeadForm = ({ locationName }: { locationName?: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: locationName || '',
    type: 'Piso Laminado',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nova solicitação via Site PVS Decore*%0A%0A*Nome:* ${formData.name}%0A*Região:* ${formData.location}%0A*Interesse:* ${formData.type}%0A*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/${CONTACT_PHONE}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicite um Orçamento</h3>
      <p className="text-gray-500 mb-6">Resposta rápida via WhatsApp. Atendemos {locationName ? `em ${locationName}` : 'Curitiba, SJP e Região'}.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition text-gray-900 bg-white placeholder-gray-400"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bairro ou Cidade</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition text-gray-900 bg-white placeholder-gray-400"
            placeholder="Onde será a instalação?"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Piso</label>
          <select 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition bg-white text-gray-900"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
          >
            <option className="text-gray-900">Piso Laminado</option>
            <option className="text-gray-900">Piso Vinílico</option>
            <option className="text-gray-900">Rodapé Poliestireno</option>
            <option className="text-gray-900">Manutenção</option>
            <option className="text-gray-900">Outros</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
          <textarea 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition text-gray-900 bg-white placeholder-gray-400"
            rows={3}
            placeholder="Metragem aproximada ou dúvidas..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-brand-orange hover:bg-orange-700 text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-1"
        >
          Solicitar via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
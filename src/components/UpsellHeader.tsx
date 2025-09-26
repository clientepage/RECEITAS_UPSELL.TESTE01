import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export function UpsellHeader() {
  return (
    <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full mb-6 font-bold text-sm uppercase tracking-wider shadow-lg animate-pulse">
            <AlertTriangle className="w-5 h-5 mr-2" />
            OFERTA EXCLUSIVA - APENAS UMA VEZ NA VIDA
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">
            <span className="block text-yellow-300">PARABÉNS!</span>
            <span className="block">Você deu um passo</span>
            <span className="block text-yellow-300">IMPORTANTE...</span>
          </h1>
          
          <div className="bg-black bg-opacity-50 rounded-lg p-8 mb-8 border-l-4 border-yellow-400">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-6">
              Mas ainda está <span className="text-red-300 underline">PERDENDO</span> o que realmente separa quem melhora um pouco da saúde...
            </p>
            <p className="text-3xl md:text-4xl font-black text-yellow-300 leading-tight">
              Para quem conquista resultados <span className="bg-yellow-400 text-black px-2 rounded">IMPRESSIONANTES</span> e duradouros!
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-yellow-300">
            <Clock className="w-6 h-6 animate-spin" />
            <span className="text-lg font-semibold">Esta página expira em breve...</span>
            <Clock className="w-6 h-6 animate-spin" />
          </div>
        </div>
      </div>
    </div>
  );
}
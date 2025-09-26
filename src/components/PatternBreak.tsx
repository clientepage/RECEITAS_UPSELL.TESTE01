import React from 'react';
import { ArrowRight, Eye, Lock, AlertCircle, Zap } from 'lucide-react';

export function PatternBreak() {
  return (
    <div className="bg-gray-900 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 to-gray-900 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full mb-6 font-bold text-sm uppercase tracking-wider shadow-lg">
            <Eye className="w-5 h-5 mr-2" />
            INFORMAÇÃO CONFIDENCIAL - LEIA COM ATENÇÃO
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-12 shadow-2xl border-l-8 border-orange-500 mb-12">
          <div className="flex items-start mb-8">
            <ArrowRight className="w-8 h-8 text-orange-500 mt-2 mr-6 flex-shrink-0" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Escute bem: O que você acabou de comprar é apenas a <span className="text-orange-500">PONTA DO ICEBERG</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                <strong>O guia que você acabou de garantir É PODEROSO, sim...</strong> Ele vai te ajudar com receitas naturais básicas que já funcionam para milhares de pessoas.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                Mas aqui está a <span className="bg-yellow-200 px-2 font-black text-gray-900">VERDADE BRUTAL</span> que poucos sabem:
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-xl md:text-2xl text-red-800 font-bold leading-relaxed">
                  Existem receitas e combinações TÃO PODEROSAS que nunca entraram no material principal...
                </p>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                Elas são <span className="bg-yellow-200 px-2 font-bold">guardadas a sete chaves por especialistas</span>, escondidas em livros antigos de mais de 100 anos, passadas de avô para neto em famílias tradicionais...
              </p>
              
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                São fórmulas que <strong>curandeiros indígenas</strong> usavam para tratar casos que a medicina moderna considera "impossíveis"...
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-yellow-300 mr-4" />
              <h3 className="text-2xl md:text-3xl font-black">E AQUI ESTÁ O PROBLEMA:</h3>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed mb-4">
              Sem essas receitas SECRETAS, você vai continuar vendo progresso lento, melhorias pequenas...
            </p>
            <p className="text-2xl md:text-3xl font-black text-yellow-300">
              Enquanto poderia <span className="underline">ACELERAR TUDO EM SEMANAS!</span>
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="bg-gradient-to-b from-orange-500 to-orange-600 rounded-lg p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">RESULTADOS 5X MAIS RÁPIDOS</h4>
            <p>Com as fórmulas secretas que você vai descobrir</p>
          </div>
          
          <div className="bg-gradient-to-b from-green-500 to-green-600 rounded-lg p-6 text-center">
            <AlertCircle className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">CASOS "IMPOSSÍVEIS"</h4>
            <p>Receitas para problemas que médicos dizem não ter cura</p>
          </div>
          
          <div className="bg-gradient-to-b from-purple-500 to-purple-600 rounded-lg p-6 text-center">
            <Lock className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">CONHECIMENTO ANCESTRAL</h4>
            <p>Segredos guardados por gerações de curandeiros</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 mt-12">
        <div className="text-center">
          <a href="https://pay.kiwify.com.br/EfeNa7a" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-2xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 group border-4 border-yellow-400">
            <div className="flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-black mr-4">🚀 QUERO ACESSO AGORA!</span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="mt-2">
              <span className="text-lg text-green-200">Por apenas R$ 67 à vista</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
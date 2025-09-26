import React from 'react';
import { AlertTriangle, Clock, Shield, X, Eye } from 'lucide-react';

export function ScarcitySection() {
  return (
    <div className="bg-red-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-800 to-red-900"></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full mb-8 font-black text-lg shadow-2xl animate-pulse">
            <AlertTriangle className="w-6 h-6 mr-3" />
            ⚠️ ATENÇÃO MÁXIMA - LEIA ISSO AGORA ⚠️
          </div>
          
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            <span className="block text-yellow-300">ÚLTIMA</span>
            <span className="block">CHANCE!</span>
          </h3>
        </div>
        
        <div className="bg-white rounded-2xl p-12 shadow-2xl border-8 border-yellow-400 mb-12">
          <div className="text-center mb-8">
            <Eye className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-3xl md:text-4xl font-black text-red-600 mb-6">
              MATERIAL ULTRA-EXCLUSIVO
            </h4>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-red-50 border-l-8 border-red-500 p-8">
              <div className="flex items-start">
                <Clock className="w-12 h-12 text-red-500 mt-2 mr-6 flex-shrink-0" />
                <div>
                  <h5 className="text-2xl md:text-3xl font-black text-red-800 mb-4">
                    🚨 DISPONIBILIDADE LIMITADÍSSIMA
                  </h5>
                  <p className="text-xl md:text-2xl text-red-700 leading-relaxed mb-4">
                    Esse material <strong>NÃO ESTÁ À VENDA</strong> em nenhum outro lugar do mundo. Nem na internet, nem em livros, nem com outros especialistas.
                  </p>
                  <p className="text-xl md:text-2xl text-red-700 leading-relaxed">
                    É literalmente <span className="bg-yellow-200 px-2 font-black text-red-900">IMPOSSÍVEL</span> conseguir essas informações em outro lugar!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-8 border-blue-500 p-8">
              <div className="flex items-start">
                <Shield className="w-12 h-12 text-blue-500 mt-2 mr-6 flex-shrink-0" />
                <div>
                  <h5 className="text-2xl md:text-3xl font-black text-blue-800 mb-4">
                    👥 APENAS PARA ALUNOS SELECIONADOS
                  </h5>
                  <p className="text-xl md:text-2xl text-blue-700 leading-relaxed mb-4">
                    Esse pacote foi criado originalmente para <strong>apenas 50 alunos VIP</strong> que pagaram mais de R$ 2.000 por uma consultoria particular.
                  </p>
                  <p className="text-xl md:text-2xl text-blue-700 leading-relaxed">
                    Estou liberando aqui <span className="bg-yellow-200 px-2 font-black text-blue-900">APENAS COMO COMPLEMENTO</span> da sua compra de hoje.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-8 border-yellow-500 p-8">
              <div className="flex items-start">
                <X className="w-12 h-12 text-yellow-600 mt-2 mr-6 flex-shrink-0" />
                <div>
                  <h5 className="text-2xl md:text-3xl font-black text-yellow-800 mb-4">
                    ⏰ SE SAIR DESTA PÁGINA = ACABOU PARA SEMPRE
                  </h5>
                  <p className="text-xl md:text-2xl text-yellow-700 leading-relaxed mb-4">
                    Esta oferta <strong>NUNCA MAIS</strong> vai aparecer na sua vida. Nem por email, nem por WhatsApp, nem em outra página.
                  </p>
                  <p className="text-xl md:text-2xl text-yellow-700 leading-relaxed font-black">
                    É AGORA OU NUNCA MAIS!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-black rounded-2xl p-8 border-4 border-red-500">
          <div className="text-center">
            <h4 className="text-3xl md:text-4xl font-black text-red-400 mb-4">
              🔥 DECISÃO DE R$ 865 EM 30 SEGUNDOS
            </h4>
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Você tem 30 segundos para decidir se quer economizar <strong>R$ 865</strong> e ter acesso ao conhecimento mais secreto da medicina natural...
            </p>
            <p className="text-2xl md:text-3xl text-red-400 font-black mt-4">
              OU perder essa chance para sempre!
            </p>
            
            <div className="mt-8">
              <a href="https://pay.kiwify.com.br/EfeNa7a" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-2xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 group border-4 border-yellow-400">
                <div className="flex items-center justify-center">
                  <Clock className="w-8 h-8 mr-4" />
                  <span className="text-2xl md:text-3xl font-black">ÚLTIMA CHANCE - R$ 67!</span>
                </div>
                <div className="mt-2">
                  <span className="text-lg text-green-200">Não perca essa oportunidade única</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
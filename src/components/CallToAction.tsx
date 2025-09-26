import React from 'react';
import { CheckCircle, X, ArrowRight, Zap, Clock, AlertTriangle } from 'lucide-react';

export function CallToAction() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full mb-8 font-black text-lg shadow-2xl animate-pulse">
            <Clock className="w-6 h-6 mr-3" />
            ⏰ DECISÃO FINAL - ÚLTIMOS SEGUNDOS ⏰
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            <span className="block text-red-400">SUA DECISÃO</span>
            <span className="block text-yellow-400">FINAL</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Você tem <strong>2 CAMINHOS</strong> agora. Escolha com sabedoria, porque não há volta...
          </p>
        </div>
        
        <div className="space-y-8">
          <a href="https://pay.kiwify.com.br/EfeNa7a" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-2xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-300 group border-4 border-yellow-400">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 mr-4" />
              <span className="text-3xl md:text-4xl font-black">✅ SIM, EU QUERO TUDO!</span>
            </div>
            
            <div className="bg-black bg-opacity-30 rounded-lg p-6 mb-6">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                Quero acesso à <span className="text-yellow-300">FARMÁCIA NATURAL AVANÇADA</span>
              </p>
              <p className="text-xl md:text-2xl mb-4">
                Com as 25 receitas secretas, vídeo-aulas exclusivas, mapa visual, fornecedores confiáveis e bônus premium
              </p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl md:text-6xl font-black text-yellow-300">R$ 67</span>
                <span className="text-xl ml-4 text-green-200">à vista</span>
              </div>
              <p className="text-lg text-green-200">
                (ou 7x de R$ 9,57 no cartão)
              </p>
            </div>
            
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-yellow-300 mr-3" />
              <span className="text-lg text-green-200">
                1 CLIQUE - Sem precisar preencher nada de novo
              </span>
            </div>
            
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold mr-3">GARANTIR ACESSO AGORA</span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
          
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-2xl p-8 shadow-lg transition-all duration-300 border-2 border-gray-600">
            <div className="flex items-center justify-center mb-4">
              <X className="w-8 h-8 mr-4 text-red-400" />
              <span className="text-2xl md:text-3xl font-bold">❌ Não, obrigado</span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 mb-2">
              Prefiro ficar de fora das receitas avançadas e continuar apenas com o básico
            </p>
            <p className="text-base text-red-400 font-bold">
              (E perder para sempre a chance de ter acesso às fórmulas secretas)
            </p>
          </button>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-red-900 rounded-lg p-6 border-2 border-red-500">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-black text-lg">AVISO FINAL:</span>
            </div>
            <p className="text-white text-lg leading-relaxed">
              Esta oferta <strong>EXPIRA</strong> quando você sair desta página. Não haverá segunda chance, não haverá outro desconto, não haverá outra oportunidade.
            </p>
            <p className="text-red-300 font-black text-xl mt-2">
              É AGORA OU NUNCA MAIS!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
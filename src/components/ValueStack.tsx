import React from 'react';
import { Package, TrendingUp, X, DollarSign, Calculator } from 'lucide-react';

export function ValueStack() {
  const items = [
    { 
      name: "Guia Avançado com 25 Fórmulas Secretas", 
      value: 297,
      description: "Receitas que curandeiros cobravam R$ 500+ por consulta"
    },
    { 
      name: "Vídeo-aulas Práticas Exclusivas", 
      value: 197,
      description: "Aulas particulares que valeriam R$ 100 cada uma"
    },
    { 
      name: "Mapa Visual da Saúde Natural", 
      value: 147,
      description: "Ferramenta que levou 2 anos para ser desenvolvida"
    },
    { 
      name: "Lista Secreta de Fornecedores", 
      value: 97,
      description: "Informação que economiza milhares em produtos falsificados"
    },
    { 
      name: "Bônus Premium: Receitas de Longevidade", 
      value: 127,
      description: "Conhecimento ancestral que não tem preço"
    }
  ];

  const total = items.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Package className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="block text-white">VAMOS FAZER AS</span>
            <span className="block text-yellow-400">CONTAS JUNTOS...</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Se você fosse comprar cada item separadamente, ou contratar especialistas para te ensinar isso tudo...
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl mb-12 border-4 border-yellow-400">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-center mb-8 text-gray-900">
              💰 VALOR REAL DE CADA COMPONENTE:
            </h3>
          </div>
          
          {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b-2 border-gray-200 last:border-b-0">
              <div className="flex-1 mb-4 md:mb-0">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{item.name}</h4>
                <p className="text-lg text-gray-600 italic">{item.description}</p>
              </div>
              <div className="text-right">
                <span className="text-2xl md:text-3xl font-black text-green-600">R$ {item.value}</span>
              </div>
            </div>
          ))}
          
          <div className="flex justify-between items-center pt-8 mt-8 border-t-4 border-red-500 bg-red-50 rounded-lg p-6">
            <div>
              <span className="text-2xl md:text-3xl font-black text-gray-900">VALOR TOTAL REAL:</span>
              <p className="text-lg text-gray-600 mt-2">Se você comprasse tudo separadamente...</p>
            </div>
            <span className="text-4xl md:text-5xl font-black text-red-600">R$ {total}</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl p-12 shadow-2xl border-4 border-yellow-400">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-10 h-10 text-yellow-300 mr-4" />
              <span className="text-lg md:text-xl uppercase tracking-wider font-black text-yellow-300">
                OFERTA ESPECIAL DESTA PÁGINA
              </span>
            </div>
            
            <p className="text-2xl md:text-3xl mb-8 text-white leading-relaxed">
              Mas <span className="text-yellow-300 font-black">SOMENTE AGORA</span>, nessa página, por você ter acabado de comprar...
            </p>
            
            <div className="bg-black rounded-lg p-8 mb-6">
              <p className="text-xl md:text-2xl text-white mb-4">Você garante TUDO por apenas:</p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-7xl md:text-8xl font-black text-yellow-400">R$ 67</span>
              </div>
              <p className="text-xl md:text-2xl text-green-400 font-bold">
                à vista <span className="text-white">(ou 7x de R$ 9,57 no cartão)</span>
              </p>
            </div>
            
            <div className="bg-yellow-400 text-black rounded-lg p-6">
              <div className="flex items-center justify-center mb-2">
                <Calculator className="w-6 h-6 mr-2" />
                <span className="text-xl font-black">ECONOMIA BRUTAL:</span>
              </div>
              <p className="text-2xl font-black">
                Você economiza R$ {total - 67} = Mais de {Math.round(((total - 67) / total) * 100)}% de desconto!
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="https://pay.kiwify.com.br/EfeNa7a" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-2xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 group border-4 border-yellow-400">
            <div className="flex items-center justify-center">
              <DollarSign className="w-8 h-8 mr-4" />
              <span className="text-2xl md:text-3xl font-black">SIM, QUERO ECONOMIZAR R$ {total - 67}!</span>
            </div>
            <div className="mt-2">
              <span className="text-lg text-green-200">Garantir por apenas R$ 67 à vista</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
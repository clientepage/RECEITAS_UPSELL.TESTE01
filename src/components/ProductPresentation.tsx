import React from 'react';
import { Star, Gift, CheckCircle, Crown, Zap, Shield } from 'lucide-react';

export function ProductPresentation() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "25 FÓRMULAS SECRETAS AVANÇADAS",
      description: "Para insônia crônica, ansiedade severa, pressão alta descontrolada, diabetes tipo 2, dores que não passam com nada, inflamações persistentes que destroem sua qualidade de vida. Receitas que médicos não conhecem e que funcionam quando tudo mais falhou."
    },
    {
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      title: "VÍDEO-AULAS EXCLUSIVAS (5-10 MIN CADA)",
      description: "Não é só receita no papel! Você vai VER exatamente como preparar cada fórmula, na dosagem certa, no tempo certo, com as técnicas secretas que fazem TODA a diferença. Cada vídeo é uma aula particular com um especialista."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "MAPA VISUAL DA SAÚDE NATURAL",
      description: "Um guia visual COMPLETO que mostra exatamente qual erva usar para cada sintoma específico. Nunca mais você vai ficar perdido sem saber o que tomar. É como ter um curandeiro experiente ao seu lado 24 horas por dia."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "LISTA SECRETA DE FORNECEDORES CONFIÁVEIS",
      description: "Os lugares EXATOS onde comprar ervas puras, sem adulteração, sem veneno, sem falsificação. Fornecedores que eu uso há anos e que garantem a qualidade que faz a diferença entre funcionar ou não funcionar."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-8 py-4 mb-8 font-black text-lg shadow-2xl">
            <Star className="w-6 h-6 mr-3" />
            EXCLUSIVO & ULTRA-SECRETO
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            <span className="block text-yellow-400">FARMÁCIA</span>
            <span className="block text-white">NATURAL</span>
            <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">AVANÇADA</span>
          </h2>
          
          <div className="bg-red-600 rounded-lg p-8 mb-12 border-4 border-yellow-400">
            <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed mb-4">
              Um pacote <span className="text-yellow-300">ULTRA-SECRETO</span>, exclusivo e fechado...
            </p>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              Criado para quem <strong>NÃO SE CONTENTA</strong> com o básico e quer acesso ao que <span className="bg-yellow-400 text-black px-2 font-black">QUASE NINGUÉM SABE</span> que existe!
            </p>
          </div>
        </div>

        <div className="space-y-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-2xl border-l-8 border-green-500 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="mr-6 bg-gray-100 rounded-full p-4">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                    ✅ {feature.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl p-8 shadow-2xl border-4 border-white">
          <div className="flex items-center mb-6">
            <Gift className="w-10 h-10 text-white mr-4" />
            <h3 className="text-3xl md:text-4xl font-black text-white">BÔNUS PREMIUM INCLUÍDO:</h3>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              🔥 RECEITAS AFRODISÍACAS E DE LONGEVIDADE
            </h4>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Fórmulas ancestrais para <strong>energia sexual</strong>, <strong>vitalidade extrema</strong>, <strong>longevidade</strong> e <strong>bem-estar total</strong>. Receitas que homens e mulheres de 80 anos usam para ter energia de 30!
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Isso é <span className="text-yellow-400 font-bold">TUDO</span> que você precisa para transformar sua saúde de forma <span className="text-green-400 font-bold">DEFINITIVA</span> e <span className="text-red-400 font-bold">ACELERADA</span>!
          </p>
          
          <div className="mt-8">
            <a href="https://pay.kiwify.com.br/EfeNa7a" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-2xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 group border-4 border-yellow-400">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-8 h-8 mr-4" />
                <span className="text-2xl md:text-3xl font-black">GARANTIR ACESSO AGORA!</span>
              </div>
              <div className="mt-2">
                <span className="text-lg text-green-200">Apenas R$ 67 à vista (ou 7x de R$ 9,57)</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
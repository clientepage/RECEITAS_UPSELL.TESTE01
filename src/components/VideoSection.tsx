import React, { useState } from 'react';
import { Play, Volume2, Users, Star } from 'lucide-react';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full mb-6 font-bold text-sm uppercase tracking-wider shadow-lg">
            <Users className="w-5 h-5 mr-2" />
            MENSAGEM EXCLUSIVA DO ESPECIALISTA
          </div>
          
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            <span className="block text-red-400">ASSISTA AGORA:</span>
            <span className="block text-yellow-400">90 Segundos que Podem</span>
            <span className="block text-white">Mudar Sua Vida</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Uma mensagem direta e sem enrolação sobre por que você <strong>PRECISA</strong> dessas receitas secretas
          </p>
        </div>
        
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-red-500 mb-8">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/x5JhlnK48Tg?autoplay=0&controls=1&rel=0&modestbranding=1"
              title="Vídeo Exclusivo - Farmácia Natural Avançada"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-t-2xl"
            ></iframe>
          </div>
          
          <div className="p-8 bg-gray-800">
            <div className="flex items-center mb-6">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <h4 className="text-white font-black text-xl">
                TRANSCRIÇÃO COMPLETA DO VÍDEO (90 segundos):
              </h4>
            </div>
            
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <p className="bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                <strong className="text-green-400">"Parabéns pela sua decisão inteligente!</strong> Você já garantiu acesso ao guia e vai começar a usar receitas naturais ainda hoje. Isso já te coloca à frente de 95% das pessoas."
              </p>
              
              <p className="bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-500">
                <strong className="text-yellow-400">"Mas deixa eu ser BRUTALMENTE HONESTO com você:</strong> existem fórmulas muito mais poderosas que ficaram de fora desse guia, porque são raras, avançadas e exigem mais cuidado no preparo."
              </p>
              
              <p className="bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                <strong className="text-blue-400">"São receitas que curandeiros indígenas guardavam como tesouro,</strong> que famílias tradicionais passavam apenas para os filhos mais velhos, que especialistas cobravam fortunas para ensinar."
              </p>
              
              <p className="bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500">
                <strong className="text-purple-400">"Eu organizei tudo isso no pacote exclusivo FARMÁCIA NATURAL AVANÇADA:</strong> 25 receitas secretas, vídeo-aulas rápidas, mapa visual da saúde natural, fornecedores confiáveis e até receitas de vitalidade e longevidade."
              </p>
              
              <p className="bg-gray-700 p-4 rounded-lg border-l-4 border-red-500">
                <strong className="text-red-400">"Esse pacote vale mais de R$ 800, mas somente agora você pode levar por R$ 67.</strong> É menos do que você gasta em um jantar para dois."
              </p>
              
              <p className="bg-gray-700 p-4 rounded-lg border-l-4 border-orange-500">
                <strong className="text-orange-400">"Mas atenção: essa oportunidade só aparece UMA VEZ na vida.</strong> Se fechar a página, acabou para sempre. Não haverá segunda chance."
              </p>
              
              <p className="bg-black p-4 rounded-lg border-4 border-yellow-400">
                <strong className="text-yellow-400 text-xl">"Clique no botão abaixo e desbloqueie AGORA o conhecimento mais avançado da farmácia natural. Sua saúde merece o melhor!"</strong>
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 border-2 border-yellow-400">
            <p className="text-white text-lg font-bold">
              🎯 <strong>DEPOIS DE ASSISTIR:</strong> Role para baixo e garante seu acesso por apenas R$ 67
            </p>
          </div>
          
          <div className="mt-8">
            <a href="https://pay.kiwify.com.br/EfeNa7a" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-2xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 group border-4 border-yellow-400">
              <div className="flex items-center justify-center">
                <Play className="w-8 h-8 mr-4" />
                <span className="text-2xl md:text-3xl font-black">ACESSO IMEDIATO - R$ 67!</span>
              </div>
              <div className="mt-2">
                <span className="text-lg text-green-200">Clique aqui e garanta agora mesmo</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
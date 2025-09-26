import React from 'react';
import { Shield, CheckCircle, RefreshCw, Award, Lock } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <Shield className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h3 className="text-4xl md:text-6xl font-black text-green-800 mb-8 leading-tight">
            <span className="block">GARANTIA</span>
            <span className="block text-green-600">BLINDADA</span>
            <span className="block">DE 7 DIAS</span>
          </h3>
        </div>
        
        <div className="bg-white rounded-2xl p-12 shadow-2xl border-8 border-green-500 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h4 className="text-3xl md:text-4xl font-black text-green-800 mb-6">
                  🛡️ "EU ASSUMO TODO O RISCO POR VOCÊ"
                </h4>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                  Olha, eu tenho <strong>TANTA CERTEZA</strong> de que esse material vai transformar sua saúde que vou fazer o seguinte:
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                  Você tem <span className="bg-green-200 px-2 font-black text-green-900">7 DIAS COMPLETOS</span> para testar, usar as receitas, ver os vídeos, aplicar tudo...
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                  Se por <strong>QUALQUER MOTIVO</strong> você achar que não valeu cada centavo, é só me mandar uma mensagem que eu <span className="bg-yellow-200 px-2 font-black text-gray-900">DEVOLVO 100% DO SEU DINHEIRO</span> na mesma hora!
                </p>
              </div>
              
              <div className="bg-green-600 text-white rounded-lg p-6 mb-6">
                <div className="flex items-center mb-4">
                  <RefreshCw className="w-8 h-8 text-green-200 mr-4" />
                  <h5 className="text-2xl font-black">SEM PERGUNTAS, SEM ENROLAÇÃO!</h5>
                </div>
                <p className="text-xl leading-relaxed">
                  Ou seja, <strong>TODO O RISCO É MEU</strong>. Você só tem a ganhar!
                </p>
              </div>
              
              <div className="bg-yellow-400 text-black rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Award className="w-6 h-6 mr-2" />
                  <span className="text-xl font-black">GARANTIA PREMIUM:</span>
                </div>
                <p className="text-lg font-bold">
                  Mesmo se você pedir reembolso, pode FICAR com todo o material como agradecimento por ter confiado em mim!
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-48 h-48 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <div>
                  <div className="text-5xl font-black mb-2">100%</div>
                  <div className="text-xl font-bold">GARANTIDO</div>
                  <div className="text-sm">7 DIAS</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6">
                <Lock className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h5 className="text-lg font-bold text-gray-800 mb-2">SEGURANÇA TOTAL</h5>
                <p className="text-gray-600">
                  Pagamento 100% seguro e protegido
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 shadow-2xl">
            <h4 className="text-2xl md:text-3xl font-black mb-4">
              🎯 RESUMINDO: VOCÊ NÃO TEM NADA A PERDER!
            </h4>
            <p className="text-xl md:text-2xl leading-relaxed">
              Ou você transforma sua saúde com receitas secretas que <strong>NINGUÉM MAIS TEM ACESSO</strong>...
            </p>
            <p className="text-xl md:text-2xl font-black text-yellow-300 mt-4">
              Ou você recebe seu dinheiro de volta e ainda fica com tudo!
            </p>
            
            <div className="mt-8">
              <a href="https://pay.kiwify.com.br/EfeNa7a" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-2xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 group border-4 border-yellow-400">
                <div className="flex items-center justify-center">
                  <Shield className="w-8 h-8 mr-4" />
                  <span className="text-2xl md:text-3xl font-black">GARANTIDO - COMPRAR AGORA!</span>
                </div>
                <div className="mt-2">
                  <span className="text-lg text-green-200">100% seguro - 7 dias de garantia</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
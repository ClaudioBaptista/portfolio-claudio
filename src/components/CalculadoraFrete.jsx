import React, { useState } from 'react';

export default function CalculadoraFrete() {
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  // Função assíncrona para consumir a API do ViaCEP
  const buscarCep = async (cep) => {
    const cepLimpo = cep.replace(/\D/g, ''); // Remove traços e espaços
    if (cepLimpo.length !== 8) throw new Error('CEP inválido');
    
    const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const dados = await resposta.json();
    
    if (dados.erro) throw new Error('CEP não encontrado');
    return dados;
  };

  const executarCalculo = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro(null);
    setResultado(null);

    try {
      // Dispara as duas requisições para a API
      const dadosOrigem = await buscarCep(cepOrigem);
      const dadosDestino = await buscarCep(cepDestino);

      // Lógica de negócio: Estimativa de distância baseada na região
      let distanciaEstimada = 0;
      if (dadosOrigem.localidade === dadosDestino.localidade) {
        distanciaEstimada = 35; // Mesma cidade
      } else if (dadosOrigem.uf === dadosDestino.uf) {
        distanciaEstimada = 250; // Mesmo estado
      } else {
        distanciaEstimada = 850; // Estados diferentes
      }

      // Regra matemática: R$ 2,50 por KM + R$ 0,50 por KG
      const valorDistancia = distanciaEstimada * 2.50;
      const valorPeso = Number(peso) * 0.50;
      const freteTotal = valorDistancia + valorPeso;

      setResultado({
        origem: `${dadosOrigem.localidade}/${dadosOrigem.uf}`,
        destino: `${dadosDestino.localidade}/${dadosDestino.uf}`,
        distancia: distanciaEstimada,
        valor: freteTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      });

    } catch (err) {
      setErro('Erro na consulta. Verifique os CEPs digitados.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full bg-slate-900 border border-slate-800 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-blue-400">Calculadora de Frete</h2>
        <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded border border-emerald-500/20 uppercase">
          API ViaCEP Integrada
        </span>
      </div>
      <p className="text-slate-400 mb-6 text-sm">Cálculo dinâmico baseado em localização real.</p>
      
      <form onSubmit={executarCalculo} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">CEP Origem</label>
            <input 
              type="text" 
              value={cepOrigem}
              onChange={(e) => setCepOrigem(e.target.value)}
              placeholder="00000-000"
              maxLength="9"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">CEP Destino</label>
            <input 
              type="text" 
              value={cepDestino}
              onChange={(e) => setCepDestino(e.target.value)}
              placeholder="00000-000"
              maxLength="9"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Peso da Carga (KG)</label>
          <input 
            type="number" 
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 500"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-white text-sm"
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={carregando}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
        >
          {carregando ? 'Consultando API...' : 'Calcular Rota e Custo'}
        </button>
      </form>

      {erro && (
        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
          {erro}
        </div>
      )}

      {resultado && (
        <div className="mt-6 p-4 bg-slate-800 rounded-lg border border-blue-500/30">
          <div className="flex justify-between items-center text-xs text-slate-400 mb-3 border-b border-slate-700 pb-2">
            <span className="font-semibold text-white">{resultado.origem}</span>
            <span className="mx-2">➔</span>
            <span className="font-semibold text-white">{resultado.destino}</span>
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-slate-400 mb-1">Distância Estimada:</p>
              <p className="text-sm font-semibold text-slate-300">{resultado.distancia} km</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400 mb-1">Custo Total:</p>
              <p className="text-2xl font-bold text-blue-400">{resultado.valor}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
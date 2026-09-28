import { useState } from 'react';

const corridasIniciais = [
  { id: 1, data: '2026-07-10', distancia: 5, tempoMinutos: 28 },
  { id: 2, data: '2026-07-12', distancia: 8, tempoMinutos: 46 }
];

function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}

// Calcula o pace (minutos por km) a partir da distância e do tempo total
function formatarPace(distanciaKm, tempoMinutos) {
  const pace = tempoMinutos / distanciaKm;
  const minutos = Math.floor(pace);
  const segundos = Math.round((pace - minutos) * 60);
  return `${minutos}:${String(segundos).padStart(2, '0')}`;
}

function Corridas() {
  const [corridas, setCorridas] = useState(corridasIniciais);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Cada campo do formulário é seu próprio estado.
  // Começam vazios (string vazia), e vão sendo preenchidos
  // conforme o usuário digita.
  const [data, setData] = useState('');
  const [distancia, setDistancia] = useState('');
  const [tempoMinutos, setTempoMinutos] = useState('');

  function handleSubmit(event) {
    // Mesmo preventDefault de sempre: impede o navegador
    // de recarregar a página ao enviar o form.
    event.preventDefault();

    const novaCorrida = {
      id: Date.now(), // jeito simples de gerar um id único: timestamp atual
      data,
      distancia: Number(distancia),
      tempoMinutos: Number(tempoMinutos)
    };

    // Spread de novo: cria um array novo com tudo que já tinha,
    // mais a corrida nova no final.
    setCorridas([...corridas, novaCorrida]);

    // Limpa os campos, voltando cada estado pro valor inicial
    setData('');
    setDistancia('');
    setTempoMinutos('');
    setMostrarFormulario(false);
  }

  // Ordena as corridas mais recentes primeiro, sem alterar o array original
  const corridasOrdenadas = [...corridas].sort((a, b) => b.data.localeCompare(a.data));

  return (
    <section className="view active">
      <div className="section-header">
        <h2>Minhas Corridas</h2>
        <button className="btn-primary" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
          + Nova Corrida
        </button>
      </div>

      {mostrarFormulario && (
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="corrida-data">Data</label>
            <input
              type="date"
              id="corrida-data"
              value={data}
              onChange={(event) => setData(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="corrida-distancia">Distância (km)</label>
            <input
              type="number"
              id="corrida-distancia"
              step="0.1"
              min="0"
              value={distancia}
              onChange={(event) => setDistancia(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="corrida-tempo">Tempo (minutos)</label>
            <input
              type="number"
              id="corrida-tempo"
              min="0"
              value={tempoMinutos}
              onChange={(event) => setTempoMinutos(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Salvar Corrida
          </button>
        </form>
      )}

      <div className="card-list">
        {corridasOrdenadas.map((corrida) => (
          <div key={corrida.id} className="card">
            <h3>{corrida.distancia} km</h3>
            <p>{formatarPace(corrida.distancia, corrida.tempoMinutos)} min/km</p>
            <p className="muted">
              {corrida.tempoMinutos} min · {formatarData(corrida.data)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Corridas;
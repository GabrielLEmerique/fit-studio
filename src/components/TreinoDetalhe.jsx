function TreinoDetalhe({ treino, onVoltar, onAlternarSerie }) {
  return (
    <section className="view active">
      <button className="btn-voltar" onClick={onVoltar}>
        &larr; Voltar
      </button>
      <h2>{treino.nome}</h2>

      <div>
        {treino.exercicios.map((exercicio, exercicioIndex) => (
          <div key={exercicio.nome} className="exercicio-card">
            <h4>{exercicio.nome}</h4>
            <div className="series-row">
              {exercicio.series.map((feita, serieIndex) => (
                <button
                  key={serieIndex}
                  className={`serie-pill ${feita ? 'feita' : ''}`}
                  onClick={() => onAlternarSerie(treino.id, exercicioIndex, serieIndex)}
                >
                  Série {serieIndex + 1}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TreinoDetalhe;
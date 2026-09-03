function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}

function Dashboard() {
  const proximoTreino = {
    nome: 'Push (Peito, Ombro, Tríceps)',
    data: '2026-07-16',
    exercicios: 6
  };

  const proximaCorrida = {
    data: '2026-07-17',
    distanciaPlanejada: 5,
    tipo: 'Corrida leve'
  };

  return (
    <section className="view active">
      <h2>Visão Geral</h2>
      <div id="dashboard-content">
        <div className="card">
          <h3>Próximo Treino</h3>
          <p>{proximoTreino.nome}</p>
          <p className="muted">
            {proximoTreino.exercicios} exercícios · {formatarData(proximoTreino.data)}
          </p>
        </div>

        <div className="card">
          <h3>Próxima Corrida</h3>
          <p>{proximaCorrida.tipo}</p>
          <p className="muted">
            {proximaCorrida.distanciaPlanejada} km · {formatarData(proximaCorrida.data)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

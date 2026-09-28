import { useState } from 'react';
import TreinoDetalhe from './TreinoDetalhe';

const treinosIniciais = [
  {
    id: 1,
    nome: 'Push',
    descricao: 'Peito, Ombro, Tríceps',
    exercicios: [
      { nome: 'Supino Reto', series: [false, false, false, false] },
      { nome: 'Desenvolvimento Ombro', series: [false, false, false] },
      { nome: 'Elevação Lateral', series: [false, false, false] },
      { nome: 'Tríceps Corda', series: [false, false, false] }
    ]
  },
  {
    id: 2,
    nome: 'Pull',
    descricao: 'Costas, Bíceps',
    exercicios: [
      { nome: 'Puxada Frontal', series: [false, false, false, false] },
      { nome: 'Remada Curvada', series: [false, false, false] },
      { nome: 'Rosca Direta', series: [false, false, false] }
    ]
  },
  {
    id: 3,
    nome: 'Legs',
    descricao: 'Quadríceps, Posterior, Panturrilha',
    exercicios: [
      { nome: 'Agachamento Livre', series: [false, false, false, false] },
      { nome: 'Leg Press', series: [false, false, false] },
      { nome: 'Cadeira Extensora', series: [false, false, false] },
      { nome: 'Panturrilha em Pé', series: [false, false, false] }
    ]
  }
];

function Treinos() {
  // O array de treinos agora é ESTADO, porque as séries dentro dele
  // vão mudar quando o usuário clicar (igual antes, só que agora
  // o React re-renderiza sozinho quando chamamos setTreinos).
  const [treinos, setTreinos] = useState(treinosIniciais);

  // Esse estado é LOCAL desse componente: só o mundo "Treinos"
  // precisa saber qual treino está selecionado. null = nenhum selecionado,
  // ou seja, estamos vendo a lista, não o detalhe.
  const [treinoSelecionadoId, setTreinoSelecionadoId] = useState(null);

  // Função que inverte o valor de uma série específica.
  // Recebe qual treino, qual exercício (índice) e qual série (índice).
  function alternarSerie(treinoId, exercicioIndex, serieIndex) {
    // .map() aqui devolve um NOVO array de treinos, igual ao anterior,
    // exceto pelo treino que precisa mudar. Isso é importante no React:
    // nunca alteramos o estado diretamente, sempre criamos uma cópia nova.
    const treinosAtualizados = treinos.map((treino) => {
      if (treino.id !== treinoId) return treino; // não é esse treino, devolve igual

      const exerciciosAtualizados = treino.exercicios.map((exercicio, index) => {
        if (index !== exercicioIndex) return exercicio;

        const seriesAtualizadas = exercicio.series.map((feita, index) =>
          index === serieIndex ? !feita : feita
        );

        return { ...exercicio, series: seriesAtualizadas };
      });

      return { ...treino, exercicios: exerciciosAtualizados };
    });

    setTreinos(treinosAtualizados);
  }

  // Se tiver um treino selecionado, mostra o DETALHE em vez da lista
  if (treinoSelecionadoId !== null) {
    const treino = treinos.find((t) => t.id === treinoSelecionadoId);
    return (
      <TreinoDetalhe
        treino={treino}
        onVoltar={() => setTreinoSelecionadoId(null)}
        onAlternarSerie={alternarSerie}
      />
    );
  }

  // Senão, mostra a lista normal
  return (
    <section className="view active">
      <h2>Meus Treinos</h2>
      <div className="card-list">
        {treinos.map((treino) => (
          <div
            key={treino.id}
            className="card card-clickable"
            onClick={() => setTreinoSelecionadoId(treino.id)}
          >
            <h3>{treino.nome}</h3>
            <p>{treino.descricao}</p>
            <p className="muted">{treino.exercicios.length} exercícios</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Treinos;
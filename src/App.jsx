import { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  // useState devolve DUAS coisas:
  // 1. o valor atual do estado (viewAtiva)
  // 2. uma função pra atualizar esse estado (setViewAtiva)
  // 'dashboard' é o valor inicial, igual a section que tinha 'active' no HTML
  const [viewAtiva, setViewAtiva] = useState('dashboard');

  return (
    <>
      <Header viewAtiva={viewAtiva} onMudarView={setViewAtiva} />

      <main className="app-main">
        {viewAtiva === 'dashboard' && <p>Dashboard vai aqui</p>}
        {viewAtiva === 'treinos' && <p>Treinos vai aqui</p>}
        {viewAtiva === 'corridas' && <p>Corridas vai aqui</p>}
      </main>
    </>
  );
}

export default App;

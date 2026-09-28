import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Treinos from './components/Treinos';
import './App.css';

function App() {
  const [viewAtiva, setViewAtiva] = useState('dashboard');

  return (
    <>
      <Header viewAtiva={viewAtiva} onMudarView={setViewAtiva} />

      <main className="app-main">
        {viewAtiva === 'dashboard' && <Dashboard />}
        {viewAtiva === 'treinos' && <Treinos />}
        {viewAtiva === 'corridas' && <p>Corridas vai aqui</p>}
      </main>
    </>
  );
}

export default App;
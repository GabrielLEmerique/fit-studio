import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Treinos from './components/Treinos';
import Corridas from './components/Corridas';
import './App.css';

function App() {
  const [viewAtiva, setViewAtiva] = useState('dashboard');

  return (
    <>
      <Header viewAtiva={viewAtiva} onMudarView={setViewAtiva} />

      <main className="app-main">
        {viewAtiva === 'dashboard' && <Dashboard />}
        {viewAtiva === 'treinos' && <Treinos />}
        {viewAtiva === 'corridas' && <Corridas />}
      </main>
    </>
  );
}

export default App;
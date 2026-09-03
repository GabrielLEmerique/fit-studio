function Header({ viewAtiva, onMudarView }) {
  const itensNav = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'treinos', label: 'Treinos' },
    { id: 'corridas', label: 'Corridas' }
  ];

  return (
    <header className="app-header">
      <h1>FIT Studio</h1>
      <nav className="main-nav">
        {itensNav.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${viewAtiva === item.id ? 'active' : ''}`}
            onClick={() => onMudarView(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;

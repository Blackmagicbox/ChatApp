import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <aside className="sidebar">contacts</aside>
      <main className="conversation-container">
        <header className="conversation-header">Header</header>
        <div className="conversation">Conversation</div>
        <footer className="conversation-footer">Footer</footer>
      </main>
    </div>
  );
}

export default App;

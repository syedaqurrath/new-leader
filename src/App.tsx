import React from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard';
import AddScoreForm from './components/AddScoreForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GILLY'S Koramangala</h1>
      </header>
      <main>
        <h2>FASTEST OF TODAY</h2>
        <AddScoreForm />
        <Leaderboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;

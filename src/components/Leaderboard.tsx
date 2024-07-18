import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Score } from '../redux/reducers'; // Adjust import based on your actual setup

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {scores.map((score: Score, index: number) => (
          <li key={index}>
            <span>{score.name}</span> - <span>{score.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

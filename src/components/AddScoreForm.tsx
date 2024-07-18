// AddScoreForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore, AddScoreAction } from '../redux/actions';

const AddScoreForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [time, setTime] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const action: AddScoreAction = addScore(name, score, time);
    dispatch(action);
    setName('');
    setScore(0);
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(parseInt(e.target.value))}
        required
      />
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Add Score</button>
    </form>
  );
};

export default AddScoreForm;

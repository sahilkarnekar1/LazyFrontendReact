import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addScore } from './store';
import { FaMedal } from 'react-icons/fa';
import './Leaderboard.css';

const Leaderboard = () => {
  const scores = useSelector(state => state.scores);
  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const listRef = useRef(null);

  const handleSubmit = () => {
    if (username && score) {
      dispatch(addScore({ username, score }));
      setShowPopup(false);
      setUsername('');
      setScore('');
    } else {
      alert('Please fill out both fields');
    }
  };

  useEffect(() => {
    if (listRef.current) {
      const listItems = listRef.current.children;
      const newScoreItem = listItems[listItems.length - 1];
      newScoreItem.scrollIntoView({ behavior: 'smooth' });
      newScoreItem.classList.add('highlight');
      setTimeout(() => newScoreItem.classList.remove('highlight'), 1000);
    }
  }, [scores]);

  return (
    <div className="leaderboard-container">
      <header className="leaderboard-header">
        <h1>Fastest of Today</h1>
      </header>
      <button className="add-score-button" onClick={() => setShowPopup(true)}>Add Score</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Score</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Score (MM:SS:MS)"
              value={score}
              onChange={e => setScore(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      <ul ref={listRef} className="leaderboard-list">
        {scores.map((score, index) => (
          <li key={index} className="leaderboard-item">
            <span className="rank">{index + 1}</span>
            <span className="username">{score.username}</span>
            <span className="score">{score.score}</span>
            <FaMedal className="medal-icon" />
          </li>
        ))}
      </ul>
      <footer className="leaderboard-footer">
        <div className="footer-content">
          
        </div>
      </footer>
    </div>
  );
};

export default Leaderboard;

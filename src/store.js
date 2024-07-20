// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  scores: [
    { username: 'Anjum', score: '00:56:23' },
    { username: 'Pragati Azad', score: '00:56:23' },
    { username: 'Pragati Azad', score: '00:56:23' },
    { username: 'Hannibal Hector', score: '00:56:23' },
    { username: 'Razzi', score: '00:56:23' },
    { username: 'McRamble', score: '00:56:23' },
    { username: 'Razzi', score: '00:56:23' },
    { username: 'McRamble', score: '00:56:23' },
    { username: 'Muhammed Anjum Kunnummal', score: '00:56:23' },
    { username: 'Muhammed Anjum Kunnummal', score: '00:56:23' },
  ]
};

const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => a.score.localeCompare(b.score));
      if (state.scores.length > 10) state.scores.pop();
    }
  }
});

export const { addScore } = scoresSlice.actions;

export const store = configureStore({
  reducer: scoresSlice.reducer
});

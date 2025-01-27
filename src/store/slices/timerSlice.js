import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    sessionTime: 25,
    breakTime: 5,
    timeLeft: 25 * 60,
    isActive: false,
    isBreak: false,
  },
  reducers: {
    incrementSessionTime: (state) => {
      if (state.sessionTime < 60 && !state.isActive) {
        state.sessionTime += 1;
        if (!state.isBreak) state.timeLeft = state.sessionTime * 60;
      }
    },
    decrementSessionTime: (state) => {
      if (state.sessionTime > 1 && !state.isActive) {
        state.sessionTime -= 1;
        if (!state.isBreak) state.timeLeft = state.sessionTime * 60;
      }
    },
    incrementBreakTime: (state) => {
      if (state.breakTime < 60 && !state.isActive) {
        state.breakTime += 1;
        if (state.isBreak) state.timeLeft = state.breakTime * 60;
      }
    },
    decrementBreakTime: (state) => {
      if (state.breakTime > 1 && !state.isActive) {
        state.breakTime -= 1;
        if (state.isBreak) state.timeLeft = state.breakTime * 60;
      }
    },
    toggleTimer: (state) => {
      state.isActive = !state.isActive;
    },
    resetTimer: (state) => {
      state.sessionTime = 25;
      state.breakTime = 5;
      state.timeLeft = 25 * 60;
      state.isActive = false;
      state.isBreak = false;
    },
    decrementTimeLeft: (state) => {
      state.timeLeft -= 1;
    },
    switchMode: (state) => {
      state.isBreak = !state.isBreak;
      state.timeLeft = state.isBreak
        ? state.breakTime * 60
        : state.sessionTime * 60;
    },
  },
});

export const {
  incrementSessionTime,
  decrementSessionTime,
  incrementBreakTime,
  decrementBreakTime,
  toggleTimer,
  resetTimer,
  decrementTimeLeft,
  switchMode,
} = timerSlice.actions;

export default timerSlice.reducer;

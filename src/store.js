import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import inputReducer from './slices/inputSlice';
import modeReducer from './slices/modeSlice';
import commentsReducer from './slices/commentsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    input: inputReducer,
    mode: modeReducer,
    comments: commentsReducer
  }
});

export default store;

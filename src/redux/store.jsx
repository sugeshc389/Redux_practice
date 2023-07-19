import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/user';
import themeReducer from '../themeSlice';
import CounterSlice from '../CounterSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    counter:CounterSlice
  },
});

export default store;

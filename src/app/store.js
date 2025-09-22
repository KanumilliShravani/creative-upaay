import {configureStore} from '@reduxjs/toolkit'

import taskReducer from '../features/task/taskSlice'

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("appState");
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};




const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("appState", JSON.stringify(state));
  } catch {}
};

const preloadedState = loadFromLocalStorage();


const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));


export default store;


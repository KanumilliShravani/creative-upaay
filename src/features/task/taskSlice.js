import {createSlice} from '@reduxjs/toolkit'

const taskSlice = createSlice({
name: "tasks",
  initialState:{
   todo :[],
    inProgress: [],
    done: [],
},
reducers: {
  addTask : (state, action) => {
      const { status, title, description,priority} = action.payload;
      state[status].push({
        id: Date.now(),
        title,
        description,
        priority,
      });
    },
   deleteTask : (state,action) => {
    const { status, id } = action.payload;
      if (!state[status]) return;
      state[status] = state[status].todo.filter((task) => task.id !== id);
   }
    },

})

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
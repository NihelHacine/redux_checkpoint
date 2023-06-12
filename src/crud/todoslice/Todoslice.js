import { createSlice } from '@reduxjs/toolkit'

const initialState = {
todolist:[
     {id: Math.random(),
        title:"todo item 1",
        description:"description todo item 1",
        isDone:false},
     {id: Math.random(),
        title:"todo item 2",
        description:"description todo item 2",
        isDone:false,},
     {id:Math.random(),
        title:"todo item 3",
        description:"description todo item 3",
        isDone:true,}
    ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addnewtask: (state, action) => {
      state.todolist.push (action.payload);
    },
    removetask: (state, action) => {
        state.todolist = state.todolist.filter((el)=> el.id !== action.payload.id);
      },
      edittask: (state, action) => {
        let task = state.todolist.findIndex((el)=>el.id === action.payload.id);
        state.todolist[task] = {...state.todolist[task],isDone:!state.todolist[task].isDone}
      },
      editalltask: (state, action) => {
        let task = state.todolist.findIndex((el)=>el.id === action.payload.id);
        state.todolist[task] = {...state.todolist[task],title:action.payload.edited.title,description:action.payload.edited.description}
      },
  },
})

// Action creators are generated for each case reducer function
export const {  addnewtask, removetask, edittask , editalltask } = todoSlice.actions

export default todoSlice.reducer
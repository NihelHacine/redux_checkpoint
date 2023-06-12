import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from './todoslice/Todoslice'

export const store = configureStore({
  reducer: {
    todo: todoSlice ,
  },
})
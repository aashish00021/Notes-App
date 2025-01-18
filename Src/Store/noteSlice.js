import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name:'note',
    initialState:[],
    reducers:{
        addNote: (state, action) =>{
            state.push({id: Date.now(), ...action.payload});
        },
    },
});

export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;

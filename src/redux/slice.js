import { createSlice } from "@reduxjs/toolkit";

const initialState={
employeeDetail:[]
}


export const dataSlice=createSlice({
    name:"userData",
    initialState,
    reducers:{
        saveData:(state,action)=>{
            state.employeeDetail= [... state.employeeDetail, action.payload]
        },
        updateData:(state,action)=>{
            state.employeeDetail= action.payload
        }
    }
})

export const {saveData,updateData}=dataSlice.actions
export default dataSlice.reducer
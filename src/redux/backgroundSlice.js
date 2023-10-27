import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice=createSlice({
    name:'color',
    initialState:{
        count:0
    },
    reducers:{
        black:(state)=>{
            state.count=0
        },
        red:(state)=>{
            state.count=1
        },
        orange:(state)=>{
            state.count=2
        },
        green:(state)=>{
            state.count=3
        }
    }
})
export const {black,red,orange,green}=backgroundSlice.actions
export default backgroundSlice.reducer